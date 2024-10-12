// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CalendarioPage from './pages/CalendarioPage/CalendarioPage';
import LoginPage from './pages/LoginPage/LoginPage';

export default function App() {
  // const token = localStorage.getItem('token'); // Comentado por enquanto

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Comentado por enquanto, pois ainda não estamos utilizando autenticação */}
        {/* <Route path="/calendar" element={token ? <CalendarioPage /> : <Navigate to="/login" />} /> */}

        {/* Sem autenticação por enquanto */}
        <Route path="/calendario" element={<CalendarioPage />} />

        {/* Outras rotas, como o dashboard, podem ser adicionadas futuramente */}
      </Routes>
    </Router>
  );
}
