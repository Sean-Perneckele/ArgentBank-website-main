import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './designs/css/main.css';
import { Provider } from 'react-redux';
import { store } from './store';

import Index from './pages/index/index.jsx';
import SingIn from './pages/singIn/sing-in.jsx';
import User from './pages/user/user.jsx';
import Header from './compossant/Header.jsx';
import Footer from './compossant/footer.jsx';
import  Update  from './pages/update/update.jsx' ;  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/singIn" element={<SingIn />} />
                <Route path="/user" element={<User />} />
                <Route path="/update" element={<Update />} />
            </Routes>  
          <Footer />
        </Router>
      </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

