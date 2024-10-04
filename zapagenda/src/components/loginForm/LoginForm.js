import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validações dos campos
    if (!login) {
      newErrors.login = 'Usuário obrigatório';
    }
    if (!password) {
      newErrors.password = 'Senha obrigatória';
    }

    // Se houver erros, atualiza o estado e impede o envio
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Login attempted with:', login, password);

      // Lógica de autenticação pode ser adicionada aqui
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <p className={`input-title ${errors.login ? 'error-text' : ''}`}>
          {errors.login || 'Usuário'}
        </p>
        <input
          type="text"
          placeholder="Insira seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="login-input"
        />
      </div>

      <div className="form-group">
        <p className={`input-title ${errors.password ? 'error-text' : ''}`}>
          {errors.password || 'Senha'}
        </p>
        <input
          type="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      </div>

      <button type="submit" className="login-button">
        Entrar
      </button>
    </form>
  );
}
