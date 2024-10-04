import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', login, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="login-input"
        placeholder="Insira seu login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Insira sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="login-button">Entrar</button>
    </form>
  );
}