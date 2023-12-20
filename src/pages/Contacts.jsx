import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // In a real application, you'd likely send this data to a server
  };

  return (
    <div style={{width: 500, margin: 'auto'}}>
      <h2>Contact Us</h2>
      <p>If you have any questions or comments, feel free to reach out to us!</p>
      
      <div className="row">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <Link type="submit" className="btn btn-success" to='/'>Send Message</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
