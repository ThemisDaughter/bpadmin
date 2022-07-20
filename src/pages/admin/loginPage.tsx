import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledErrorMessage, StyledFormBackground, StyledLogin } from 'styles/styledFormComponents/index';
import { adminLogin } from 'helpers/apiService/admin.service';
// import AuthContext from 'context/AuthContext';

const AdminLoginPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
  
  const navigate = useNavigate();

  
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
      const data = await adminLogin({ username, password });
    if (data && data.userRole) {
      console.log('data from server  ', data)
      //checking if the data returned from the object has a user role and setting localStorage user role to userRole for sync page changes (the data is protected serverside)
      navigate('/admin')
    } else {
      setIsLoginFailed(true)
      console.log('error page shall be displayed', data)
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