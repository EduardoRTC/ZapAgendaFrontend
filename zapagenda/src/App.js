import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import AuthenticatedCalendar from './pages/Calendar/AutenticatedCalendarPage';
import AuthenticatedCalendar from './pages/CalendarPage/AutenticatedCalendarPage';

export default function App() {
  // const token = localStorage.getItem('token'); // Comentado por enquanto

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Comentado por enquanto, pois ainda não estamos utilizando autenticação */}
        {/* <Route path="/calendar" element={token ? <CalendarPage /> : <Navigate to="/login" />} /> */}

        {/* Sem autenticação por enquanto */}
        <Route path="/calendar" element={<AuthenticatedCalendar />} />

        {/* Outras rotas, como o dashboard, podem ser adicionadas futuramente */}
      </Routes>
    </Router>
 );
}
