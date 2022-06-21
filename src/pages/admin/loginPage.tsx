import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledFormBackground, StyledLogin } from 'styles/styledFormComponents/index';

const AdminLoginPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

// await session sid and store in local storage
  
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`http://localhost:5000/admin/login`, {username: username, password: password});
      if (data) {
        sessionStorage.setItem("user role", data['user role']);
        navigate('/admin')
      } else {
        console.log('wrong password')
      }

       console.log(data)
    } catch (err) {
      console.error(err)
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
          <input id='password' value={password} onChange={ (e) => handlePasswordInput(e)}>

        </input>
        <input type='submit' value='submit'></input>
        </StyledLogin>
    </StyledFormBackground>
  )
}

export default AdminLoginPage;