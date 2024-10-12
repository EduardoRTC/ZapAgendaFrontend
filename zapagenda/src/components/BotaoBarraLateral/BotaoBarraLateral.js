// BotaoBarraLateral.jsx
import React from "react";
import "./BotaoBarraLateral.css"; // Importando o CSS do botão

const BotaoBarraLateral = ({ titulo, icone }) => {
  return (
    <div className="botao-barra-lateral">
      <span className="icone-botao-barra-lateral">{icone}</span>
      <span className="titulo-botao-barra-lateral">{titulo}</span>
    </div>
  );
};

export default BotaoBarraLateral;
