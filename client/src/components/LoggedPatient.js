import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./LoggedPatient.css"

function LoggedPatient() {
  let patientSession;
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate('/');
  };


  function renderInfo() {
    patientSession = JSON.parse(localStorage.getItem('user'));
    if (patientSession && localStorage.getItem('isAdmin') === 'false') {
      const data = patientSession[0];
      return (
        <div>
          <h1>Patient Info</h1>

          <div className="container">
            <div className="row">
              <div className="label">Name:</div>
              <div className="value">{data['name']}</div>
            </div>
            <div className="row">
              <div className="label">Username:</div>
              <div className="value">{data['username']}</div>
            </div>
            <div className="row">
              <div className="label">Email:</div>
              <div className="value">{data['email']}</div>
            </div>
            <div className="row">
              <div className="label">Age:</div>
              <div className="value">{data['age']}</div>
            </div>
            <div className="row">
              <div className="label">Gender:</div>
              <div className="value">{data['gender']}</div>
            </div>
            <div className="row">
              <div className="label">Date of Birth:</div>
              <div className="value">{data['birthDate']}</div>
            </div>
            <div className="row">
              <div className="label">Blood Type:</div>
              <div className="value">{data['bloodType']}</div>
            </div>
            <div className="row">
              <div className="label">Address:</div>
              <div className="value">{data['address']}</div>
            </div>
            <div className="row">
              <div className="label">Street:</div>
              <div className="value">{data['street']}</div>
            </div>
            <div className="row">
              <div className="label">City:</div>
              <div className="value">{data['city']}</div>
            </div>
            <div className="row">
              <div className="label">State:</div>
              <div className="value">{data['state']}</div>
            </div>
            <div className="row">
              <div className="label">Country:</div>
              <div className="value">{data['country']}</div>
            </div>
            <div className="row">
              <div className="label">Problem Information:</div>
              <div className="value">< br />{data['problem']}</div>
            </div>
            <div className="row">
              <div className="label">Doctor Response:</div>
              <div className="value">< br />{data['doctorResponse']}</div>
            </div>
          </div>

          <button onClick={logOut}>Logout</button>
        </div>
      )
    } else {
      return <div className='un-LoggedPatient'>
        <h1>You Are Not Logged In</h1>
      </div>
    }
  }

  return (

    <div className="LoggedPatient-body">
      <header className="LoggedPatient-header">
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
      </header>

      <div className='LoggedPatient-main '>
        {
          renderInfo()
        }
      </div>

      <footer className="LoggedPatient-footer">
        <p>&copy; 2023 Al-Salam Hospital. All rights reserved.</p>
      </footer>

    </div>

  )
}

export default LoggedPatient