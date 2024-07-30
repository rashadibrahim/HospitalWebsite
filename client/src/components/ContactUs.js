import React, { useState } from 'react'
import './ContactUs.css'
import axios from 'axios';


function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  function handleResponse(event) {
    event.preventDefault();
    axios.post('http://localhost:3001/api/response', {
      name: name,
      email: email,
      phone: phone,
      message: message
    }).then(res => {
      alert(`Message Sent`);
      window.location.reload(false);
    }).catch(err => {
      alert('Sorry, Message Not Sent')
    })
  }

  return (
    <div className="contact-us-body">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={e => { setName(e.target.value) }}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={e => { setEmail(e.target.value) }}
            required
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={e => { setPhone(e.target.value) }}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={e => { setMessage(e.target.value) }}
            required
          />
          <button type="submit" onClick={handleResponse}>Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Al-Salam Hospital</p>
          <p>123 Main Street</p>
          <p>Cairo, Egypt</p>
          <p>Email: AlSalamHospitaltest@gmail.com</p>
          <p>Phone: +20 109 046 2792</p>

        </div>
      </div>
    </div>
  )
}

export default ContactUs