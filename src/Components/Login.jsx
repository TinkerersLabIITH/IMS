import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <>

    <div className='tinker'>
        <h1 className='tinker-text'>Tinkerers Lab</h1>
    </div>

    <div className='login'>
        <div className='login-text'>Login</div>
        <input type='text' placeholder='Username' className='input' />
        <input type='password' placeholder='Password' className='input' />
        <button className='login-button'>Login</button>
    </div>




    </>
  );
}

export default Login;