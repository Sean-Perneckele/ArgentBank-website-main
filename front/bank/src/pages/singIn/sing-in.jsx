 import '../../designs/css/main.css'
 import InputWrapper from '../../compossant/Input Warpper.jsx';
 import React, { useState } from 'react';
 import { useDispatch,  useSelector} from 'react-redux';
 import { login } from './Sing-inSlice.js';
 import { useNavigate } from 'react-router-dom'; 


function SingIn() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const authState = useSelector((state) => state.auth); 
  console.log('État du reducer auth :', authState);   

  const handleUsernameChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email", email)

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:email, password: password }),
      });
      console.log('API auht', response)
      if (response.ok) {
        const data = await response.json();
        dispatch(login({ email: email, password: password, token: data.body.token }));
        console.log('Connexion réussie ! Données reçues :', data);
        navigate('/user');
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
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <InputWrapper fore="email" titre="Email" type="text" id="email" updateState={handleUsernameChange}/>
          <InputWrapper fore="password" titre="Password" type="password" id="password" updateState={handlePasswordChange}/>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

            <button type="submit" className="sign-in-button" >Sign In</button>
           
        </form>
      </section>
      </div>
    </main>
    
  );
}

export default SingIn