import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboard/dashboardPage';

export default function App() {
  const token = localStorage.getItem('token');
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Add other routes as needed */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
       
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
