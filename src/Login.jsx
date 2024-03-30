// Login.jsx
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'; // Import the Login.css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authInstance = getAuth();
      await signInWithEmailAndPassword(authInstance, email, password);
      navigate('/dashboard/summary'); // Redirect to Sales Summary dashboard after login
    } catch (error) {
      console.error(error.message);
      // Handle login error
    }
  };

  return (
    <div className='divider'>
      <div className="login-container">
        <h1 className="login-text">Super Admin</h1>
        <div className="form-container">
          <form onSubmit={handleLogin}>
            <input
              className="input-field"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-container">
              <input
                className="input-field password-input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={handleTogglePassword}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>
      <div className='pictureDisplay'></div>
    </div>
  );
};

export default Login;
