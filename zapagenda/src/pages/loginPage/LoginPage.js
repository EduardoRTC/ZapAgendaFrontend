import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';
import logo from "../../assets/Logos/logo2.0.webp";

export default function LoginPage() {
  return (
    <>
      <div className="login-page">
        <div className="login-content">
          <div className="login-container">
            <h1 className="login-header">Login</h1>
            <LoginForm />
          </div>
          <div className="hero">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="hero-title">ZapAgenda</h1>
            <p className="hero-subtitle">Seu sistema automatizado de agendamentos</p>
          </div>
        </div>
      </div>

    </>
  );
}
