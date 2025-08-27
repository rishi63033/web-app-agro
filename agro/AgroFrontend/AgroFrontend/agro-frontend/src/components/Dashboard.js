import React from 'react';
import Header from './Header';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
  },
  welcome: {
    fontSize: '2rem',
    marginBottom: '40px',
    color: '#333',
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    width: '100%',
    maxWidth: '800px',
  },
  box: {
    flex: 1,
    padding: '30px',
    backgroundColor: '#f2f2f2',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },
  boxTitle: {
    fontSize: '1.5rem',
    color: '#4CAF50',
    marginBottom: '10px',
  },
  boxDesc: {
    color: '#666',
    fontSize: '1rem',
  }
};

function Dashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.welcome}>Welcome to Your Dashboard</h2>
      <div style={styles.boxContainer}>
        <div style={styles.box}>
          <div style={styles.boxTitle}>Create Request</div>
          <div style={styles.boxDesc}>Add new farm location, acreage, and harvest details.</div>
        </div>
        <div style={styles.box}>
          <div style={styles.boxTitle}>Request History</div>
          <div style={styles.boxDesc}>View your past farm requests and updates.</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
