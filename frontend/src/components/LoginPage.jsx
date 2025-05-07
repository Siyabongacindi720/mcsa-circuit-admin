import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '', role: 'Admin' });

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <img src="/logo.png" alt="MCSA Logo" className="login-logo" />
      <h2>MCSA Highveld Ridge Circuit 1021</h2>
      <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
        {['Admin', 'Rev', 'Circuit Steward', 'Society Steward', 'Secretary', 'Class Leader'].map(role => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>
      <input placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
      <p className="subtitle">System created by Siyabonga Cindi</p>
    </div>
  );
}

export default LoginPage;
