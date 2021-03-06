import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Courses from './components/Courses';
import Subject from './components/Subject'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/signup' element={<SignUp />}/>
        <Route exact path='/:course' element={<Courses />}/>
        <Route exact path='/:course/:subject' element={<Subject />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
