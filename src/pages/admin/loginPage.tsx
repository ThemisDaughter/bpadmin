import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from 'hooks/useAxios';
import { StyledFormBackground, StyledLogin } from 'styles/styledFormComponents/index';

const AdminLoginPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();


// await session sid and store in local storage
  
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      // formData.append('username', username);
      // formData.append('password', password);
      const { data } = await axios.post(`http://localhost:5000/admin/login`, {
        username: username, password: password
      }, { withCredentials: true });
      console.log(data);
      if (data) {
        console.log('data from server  ', data)
        sessionStorage.setItem("user role", data.userRole);
        navigate('/admin')
      } else {
        //TODO: display a message on form
        console.log('wrong password')
      }
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