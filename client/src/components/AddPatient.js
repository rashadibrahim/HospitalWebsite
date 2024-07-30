import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AddPatient.css'
function AddPatient() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [dob, setDOB] = useState('');
  const [blood, setBlood] = useState('');
  const [problem, setProblem] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/add', {
      name: name,
      username: username,
      email: email,
      password: password,
      age: age,
      gender: gender,
      birthDate: dob,
      bloodType: blood,
      problem: problem,
      address: address,
      street: street,
      city: city,
      state: state,
      country: country,
      doctorResponse: 'No Response Yet'
    }).then(res => {
      alert(`User: ${username} is Added!`);
      navigate('/');
    }).catch(err => {
      if (err.response.data.message.includes('username')) {
        alert('Username is Already Used!!!')
      } else if (err.response.data.message.includes('email')) {
        alert('Email is Already Used!!!')
      } else {
        alert("An Error Occurred, Please Try Again Later")
      }
    })
  }

  return (
    <div className='addPatient-Main'>
      <header className="addPatient-header">
        <nav className='addPatient-nav'>
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
      <form onSubmit={handleSubmit} id='addPatient-Register'>
        <h2>Register</h2>
        <div className='addPatient-uname'>
          <input className='addPatient-unameInput' type='text' placeholder='Full Name' required onChange={e => { setName(e.target.value) }}></input> <br />
          <input className='addPatient-unameInput' type='text' placeholder='Username' required onChange={e => { setUsername(e.target.value) }}></input> <br />
        </div>
        <input className='addPatient-input' type='email' placeholder='Email' required onChange={e => { setEmail(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='password' placeholder='Password' required onChange={e => { setPassword(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='number' placeholder='Age' required onChange={e => { setAge(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='Gender' required onChange={e => { setGender(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='date' placeholder='Date of Birth' required onChange={e => { setDOB(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='Blood type' required onChange={e => { setBlood(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='Address' required onChange={e => { setAddress(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='Street' required onChange={e => { setStreet(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='City' required onChange={e => { setCity(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='State' required onChange={e => { setState(e.target.value) }}></input> <br />

        <input className='addPatient-input' type='text' placeholder='Country' required onChange={e => { setCountry(e.target.value) }}></input> <br />

        <label>Give Information About Your Problem:</label> <br />
        <textarea
          className='addPatient-input'
          id='addPatient-Textarea'
          rows="5"
          cols="60"
          name="Problem of Patient"
          required
          value={problem}
          onChange={e => { setProblem(e.target.value) }}></textarea><br />
        <button id='addPatient-Btn'>Create Account</button>
      </form>
    </div>
  )
}

export default AddPatient