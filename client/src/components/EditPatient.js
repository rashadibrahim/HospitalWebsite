import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./EditPatient.css";

function EditPatient() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => { // simulate a delay
      const patientID = localStorage.getItem('id');
      axios.post("http://localhost:3001/api/getPatient", { id: patientID })
        .then((response) => {
          setData(response.data);
          setResponse(response.data['doctorResponse']);
          setLoading(false); //set loading state
        }).catch(err => {
          alert('User Cannot Be Retrieved')
          console.log(err)
          navigate("/admin/mypage");
        });

    }, 1000);

  }, [navigate]);

  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the Patient Data</div>
    )
  }

  function handleResponse(event) {
    event.preventDefault();
    const patientID = localStorage.getItem('id');
    axios.put('http://localhost:3001/api/updateResponse', { id: patientID, doctorResponse: response }).then(res => {
      alert("Response Updated");
      window.location.reload(false);
    }).catch(err => {
      alert('Cannot Update The Response');
    })
  }

  return (
    <div className="EditPatient-body">
      <div>
        <header className="EditPatient-header">
          <nav className='Editpatient-nav'>
            <ul>
              <li>
                <Link to="/patients">Show Patients</Link>
              </li>
              <li>
                <Link to="/admin/mypage">Show My Page</Link>
              </li>
              <li>
                <Link to="/">Main Page</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="EditPatient-main">
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
          </div>



        </div>
        <form onSubmit={handleResponse} className="form-main">
          <h2>Doctor Response:</h2>
          <br />
          <textarea
            rows="5"
            cols="60"
            name="Response From Doctor"
            value={response}
            onChange={e => { setResponse(e.target.value) }}></textarea><br />
          <button className="EditPatien-button">Update Response</button>
        </form>
        <footer className="EditPatient-footer">
          <p>&copy; 2023 Al-Salam Hospital. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default EditPatient