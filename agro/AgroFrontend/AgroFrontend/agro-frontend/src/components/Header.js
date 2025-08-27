import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const currentPath = location.pathname;

  // ✅ Always show header on all pages (we’ll control what's inside it)
  const showLogout = currentPath === '/dashboard';
  const showUser = currentPath === '/dashboard';

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>AgroConnect</h1>

      {showUser && user && <span style={styles.user}>Welcome, {user.name}</span>}

      {showLogout && (
        <button onClick={handleLogout} style={styles.logout}>Logout</button>
      )}
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  user: {
    fontWeight: 'bold',
    marginRight: '20px',
  },
  logout: {
    backgroundColor: 'white',
    color: '#4CAF50',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Header;
