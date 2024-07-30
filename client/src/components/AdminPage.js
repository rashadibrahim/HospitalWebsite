import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./AdminPage.css"

function AdminPage() {
  const [oldPasswd, setOldPasswd] = useState('');
  const [newPasswd, setNewPasswd] = useState('');
  let userSession;
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate('/');
  };

  function changePasswd(event) {
    event.preventDefault();
    axios.put('http://localhost:3001/api/updateAdmin', {
      username: userSession[0]['username'],
      oldpassword: oldPasswd,
      newpassword: newPasswd,
      email: userSession[0]['email'],
      addedBy: userSession[0]['addedBy']
    }).then(res => {
      alert('Password Updated');
      logOut();
    }
    ).catch(err => {
      console.log(err);
      alert(err.response.data.message)
    })
  }
  function renderInfo() {
    userSession = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('isAdmin') === 'true') {
      const data = userSession[0];
      return (
        <div className='AdminPage-Info'>
          <div className='AdminPage-BtnDiv'>
            <Link to="/patients">
              <button className='AdminPage-Btn'>Show Patients</button>
            </Link>
            <Link to="/addAdmin">
              <button className='AdminPage-Btn' >Add Admin</button>
            </Link>
            <button className='AdminPage-Btn' onClick={logOut}>Logout</button>
            <br />
          </div>
          <h1 id='AdminPage-HeadInfo'>Admin Info</h1>
          <div className='AdminPage-MainInfo'>
            <div className='AdminPage-Data'> <div style={{ display: 'inline', marginRight: '110px' }}>ID:</div> {data['_id']}</div>
            <div className='AdminPage-Data'><div style={{ display: 'inline', marginRight: '30px' }}>Username:</div> {data['username']}</div>
            <div className='AdminPage-Data'><div style={{ display: 'inline', marginRight: '70px' }}>Email:</div> {data['email']}</div>
            <div className='AdminPage-Data'><div style={{ display: 'inline', marginRight: '30px' }}>Added By:</div> {data['addedBy']}</div>
          </div>

          <form onSubmit={changePasswd} id='AdminPage-PassChg'>
            <h2>Change Password</h2>
            <br />
            <input className='AdminPage-label' type='password' placeholder='Old Password' required onChange={e => { setOldPasswd(e.target.value) }}></input>
            <br />
            <input className='AdminPage-label' type='password' placeholder='New Password' required onChange={e => { setNewPasswd(e.target.value) }}></input>
            <br />
            <button id='AdminPage-Btn'>Submit</button>
          </form>
        </div>
      )
    } else {
      return <div className='adminPage-NotAdmin'>
        <h1>You Are Not Logged In</h1>
      </div>
    }
  }

  return (
    <div className='adminPage-Main'>
      <header className="adminPage-header">
        <nav className='adminPage-nav'>
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
      {
        renderInfo()
      }


    </div>
  )
}

export default AdminPage