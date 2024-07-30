import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./LoginPatient.css"
function LoginPatient() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/login', { username: username, password: password }).then(res => {
      alert(`Logged In As: ${username}`);
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isAdmin', 'false');
      navigate('/' + username);
    }).catch(err => {
      alert(err.response.data.message)
      console.log(err)
    })
  }

  return (
    <div className='patientLogin-Main'>
      <header className="patientLogin-header">
        <nav className='patientLogin-nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='patientLogin-login'>
        <form onSubmit={handleSubmit} id='login-admin-form'>
          <h2>Login</h2>
          <input id='patient-username' type='text' placeholder='Enter Username' required onChange={e => { setUsername(e.target.value) }}></input> <br />
          <input id='patient-password' type='password' placeholder='Enter Password' required onChange={e => { setPassword(e.target.value) }}></input> <br />
          <button id='patient-logBtn'>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default LoginPatient