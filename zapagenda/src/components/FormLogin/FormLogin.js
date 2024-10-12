// FormLogin.jsx
import React, { useState } from 'react';
import './FormLogin.css';

export default function FormLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  const aoEnviar = async (e) => {
    e.preventDefault();

    const novosErros = {};

    if (!usuario) {
      novosErros.usuario = 'Usuário obrigatório';
    }
    if (!senha) {
      novosErros.senha = 'Senha obrigatória';
    }

    // Se houver erros, atualiza o estado e impede o envio
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
    } else {
      setErros({});
      console.log('Tentativa de login com:', usuario, senha);

      try {
        const resposta = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ login: usuario, password: senha }),
        });

        const dados = await resposta.json();

        if (resposta.ok) {
          console.log('Login bem-sucedido:', dados);
          // Armazene o token JWT conforme necessário (por exemplo, localStorage)
          localStorage.setItem('token', dados.token);
          window.location.href = '/dashboard';
        } else {
          console.error('Erro de login:', dados.message);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }
  };

  return (
    <form onSubmit={aoEnviar} className="formulario-login">
      <div className="grupo-formulario">
        <p className={`titulo-input ${erros.usuario ? 'texto-erro' : ''}`}>
          {erros.usuario || 'Usuário'}
        </p>
        <input
          type="text"
          placeholder="Insira seu login"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="input-login"
        />
      </div>

      <div className="grupo-formulario">
        <p className={`titulo-input ${erros.senha ? 'texto-erro' : ''}`}>
          {erros.senha || 'Senha'}
        </p>
        <input
          type="password"
          placeholder="Insira sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input-login"
        />
      </div>

      <button type="submit" className="botao-login">
        Entrar
      </button>
    </form>
  );
}
