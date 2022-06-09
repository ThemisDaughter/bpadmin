import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="anmeldung">Anmeldung</Link>
      <Link to="admin">admin</Link>
    </div>
  )
}

export default Home