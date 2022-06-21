import axios from 'axios';
import { useState } from 'react';
import { StyledFormBackground, StyledLogin } from 'styles/styledFormComponents/index';

const AdminLoginPage = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

// await session sid and store in local storage
  
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    // fetch('http://localhost:5000/admin/login', {
    //   method: 'POST',
    //   body: JSON.stringify({username, password}),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    try {
      const response = await axios.post(`http://localhost:5000/admin/login`, {username: username, password: password});
    //  const session = await axios({
    //     method: 'post',
    //     url: 'http://localhost:5000/admin/login',
    //     data: {
    //       username: 'Fred',
    //       password: 'Flintstone'
    //     }
    //   });
       console.log(response.data)
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