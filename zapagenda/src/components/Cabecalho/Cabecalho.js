// Cabecalho.jsx
import React from "react";
import logoEG from "../../assets/Logos/logoEG.png";
import "./Cabecalho.css";
import { FaRegUserCircle as IconeUsuario } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="logo-cabecalho">
        <img src={logoEG} alt="Logo com a letra E e G" />
        <span>ZapAgenda</span>
      </div>
      <div className="icone-cabecalho">
        <IconeUsuario color="white" size={30} />
        <h2 className="texto-icone-cabecalho">Logout</h2>
      </div>
    </header>
  );
}
