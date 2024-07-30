import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./AdminLogin.css"

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/admin', { username: username, password: password }).then(res => {
      alert(`Logged In As: ${username}`);
      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/' + username);
    }).catch(err => {
      alert(err.response.data.message)
      console.log(err)
    })
  }

  return (
    <div className='adminLogin-Main'>
      <header className="adminLogin-header">
        <nav className='adminLogin-nav'>
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

      <div className='adminLogin-login'>
        <form onSubmit={handleSubmit}>
          <h2>Admin Login</h2>

          <input id='admin-username' type='text' placeholder='Username' required onChange={e => { setUsername(e.target.value) }}></input> <br />

          <input id='admin-password' type='password' placeholder='Password' required onChange={e => { setPassword(e.target.value) }}></input> <br />
          <button id='admin-logBtn'><b>Submit</b></button>
        </form>
      </div>
    </div>
  )
}
export default AdminLogin