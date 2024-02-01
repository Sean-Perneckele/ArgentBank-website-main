 import '../../designs/css/main.css'
 import InputWrapper from '../../compossant/Input Warpper.jsx';
 import React, { useState } from 'react';
 import {useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom'; 

function Update() {

  const [username, setUsername] = useState('');
  const navigate = useNavigate(); 
  const authState = useSelector((state) => state.auth); 
  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email", username)

    try { 
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        },
        body: JSON.stringify({ userName:username }),
      });
      
      if (response.ok) {
        navigate('/user')
      } else {
        const errorData = await response.json(); 
        console.error('Erreur de connexion :', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };
  
  return (
   
    <main className="main bg-dark">
      <div className='sing-in-div bg-dark'>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit Name</h1>
        <form onSubmit={handleLogin}>
          <InputWrapper fore="username" titre="Username" type="text" id="Username" updateState={handleUsernameChange}/>
         
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

            <button type="submit" className="sign-in-button" >Ubdate</button>
 
        </form>
      </section>
      </div>
    </main>    
  );
}

export default Update