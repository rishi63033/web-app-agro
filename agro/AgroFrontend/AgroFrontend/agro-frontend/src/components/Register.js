import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('farmer');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post('/users/register', {
        name,
        phone,
        password,
        role,
        location,
      });
      setMessage('Registration successful. You can now login.');
      // Optionally navigate back to login page:
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '350px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    marginTop: '40px',
    backgroundImage: `url('/harvester.png')`,
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Register</h2>

      <input
        type="text"
        placeholder="Name"
        style={inputStyle}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        style={inputStyle}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select style={inputStyle} value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="farmer">Farmer</option>
        <option value="harvester">Harvester</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        style={inputStyle}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button style={buttonStyle} onClick={handleRegister}>Register</button>

      {message && <p style={{ marginTop: '10px', color: 'blue' }}>{message}</p>}
    </div>
  );
};

export default Register;
