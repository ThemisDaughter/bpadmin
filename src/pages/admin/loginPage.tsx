import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledErrorMessage, StyledFormBackground, StyledLogin } from 'styles/styledFormComponents/index';
import { adminLogin } from 'helpers/apiService/admin.servics';

const AdminLoginPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
      const data = await adminLogin({ username, password });
    if (data) {
      console.log('data from server  ', data)
      sessionStorage.setItem("user role", data.userRole);
      navigate('/admin')
     
    }
  }

  const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  }
  
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  }
  


  return (
    <StyledFormBackground onSubmit={ handleSubmit }>
        <StyledLogin>
          <label htmlFor='username'>username</label>
          <input id='username' value={username} onChange={(e)=> handleUsernameInput(e)}>

          </input>
          <label htmlFor='password'>password</label>
          <input id='password' type='password' value={password} onChange={ (e) => handlePasswordInput(e)}>

        </input>
        <input type='submit' value='submit'></input>
        {
          isLoginFailed
            ? <StyledErrorMessage>Anmeldung Fehlgeschlagen.</StyledErrorMessage>
            : null
        }
        </StyledLogin>
    </StyledFormBackground>
  )
}

export default AdminLoginPage;