// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userEmail) => {
    setUser(userEmail);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
