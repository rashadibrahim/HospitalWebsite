import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import './AddAdmin.css'
function AddAdmin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function addNewAdmin(event) {
    event.preventDefault();
    const admin = JSON.parse(localStorage.getItem('user'))[0]['username'];
    axios.post('http://localhost:3001/api/addAdmin', {
      username: username,
      password: password,
      email: email,
      addedBy: admin
    }).then(res => {
      alert(`Admin: ${username} is Added!`);
      navigate('/admin/mypage');
    }).catch(err => {
      alert('Username is Already Used!!!')
    })
  }
  function newAdmin() {
    if (localStorage.getItem('isAdmin') === 'true') {
      return (
        <div className='addAdmin-add'>
          <form onSubmit={addNewAdmin} id='addAdmin-form'>
            <h2>Add New Admin</h2>
            <input className='addAdmin-info' type='text' placeholder='Username' required onChange={e => { setUsername(e.target.value) }}></input>
            <br />
            <input className='addAdmin-info' type='password' placeholder='Password' required onChange={e => { setPassword(e.target.value) }}></input>
            <br />
            <input className='addAdmin-info' type='text' placeholder='Email' required onChange={e => { setEmail(e.target.value) }}></input>
            <br />
            <button id='addAdmin-Btn'>Submit</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className='addAdmin-NotAdmin'>
          <h1>You Are Not An Admin</h1>
        </div>
      )
    }
  }

  return (
    <div className='addAdmin-Main'>
      <header className="addAdmin-header">
        <nav className='addAdmin-nav'>
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
      {newAdmin()}
    </div>
  )
}

export default AddAdmin