// Rodape.jsx
import React from 'react';
import './Rodape.css';

export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="conteudo-rodape">
        <div className="logo-rodape">
          <svg className="icone-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="nome-empresa">EG Soluções Digitais</span>
        </div>
        <div className="direitos-autorais">
          &copy; {anoAtual} EG Soluções Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
