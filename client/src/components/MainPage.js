import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';


let userSession;
let isAdmin = 'false';

function MainPage() {
  function logOut() {
    localStorage.clear();
    window.location.reload(false);
  }

  function renderPage() {
    userSession = JSON.parse(localStorage.getItem('user'));
    isAdmin = localStorage.getItem('isAdmin');

    if (isAdmin === 'true') {
      return (
        <div className="MainPage-component">
          <Link to="/patients">
            <button className="mainuser-button2">Show Patients</button>
          </Link>
          <Link to="/admin/mypage"><button className="mainuser-button2">Show My Page</button></Link>
          <button className="mainuser-button" onClick={logOut}>Logout</button>
        </div>
      );
    } else if (userSession) {
      return (
        <div className="MainPage-component">
          <Link to="/mypage"><button className='mainuser-button1'>Show My Page</button></Link>
          <button className='mainuser-button' onClick={logOut}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="MainPage-component">
          <br />
          <Link to="/register">
            <button className="MainPage-btn">Register</button>
          </Link>
          <br />
          <Link to="/login">
            <button className="MainPage-btn">Login</button>
          </Link>
          <br />
          <Link to="/admin">
            <button className="MainPage-btn MainPage-admin">Admin Login</button>
          </Link>
        </div>

      );
    }
  }

  return (
    <div className="MainPage-body">
      <header className="MainPage-header">
        <nav className="MainPage-nav">
          <ul>


            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="MainPage-main">
        <h1>Welcome to Hospital Management System</h1>
        <p>
          Our hospital management software is designed to help healthcare providers manage patient data, appointments, and
          billing more efficiently.
        </p>
        <p>
          With our easy-to-use interface and advanced features, you can streamline your workflow and provide better care to
          your patients.
        </p>
        {renderPage()}


      </main>

      <footer className="MainPage-footer">
        <p>
          &copy; 2023 Hospital Management System. All rights reserved. | <Link >Privacy Policy</Link> |{' '}
          <Link >Terms and Conditions</Link>
        </p>
      </footer>
    </div>
  );
}

export default MainPage;
