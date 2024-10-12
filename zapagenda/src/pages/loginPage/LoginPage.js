// LoginPage.jsx
import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './LoginPage.css';
import logo from "../../assets/Logos/logo2.0.webp";
import Rodape from '../../components/Rodape/Rodape';

export default function LoginPage() {
  return (
    <>
      <div className="pagina-login">
        <div className="conteudo-login">
          <div className="container-login">
            <h1 className="cabecalho-login">Login</h1>
            <FormLogin />
          </div>
          <div className="hero">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="titulo-hero">ZapAgenda</h1>
            <p className="subtitulo-hero">Seu sistema automatizado de agendamentos</p>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
}
