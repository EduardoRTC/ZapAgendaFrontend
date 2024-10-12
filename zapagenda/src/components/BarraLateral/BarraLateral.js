// BarraLateral.jsx
import React from "react";
import "./BarraLateral.css"; // Importando o arquivo CSS
import BotaoBarraLateral from "../BotaoBarraLateral/BotaoBarraLateral";
import {
  FaCalendarAlt,
  FaComments,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa"; // Ícones

const BarraLateral = () => {
  return (
    <div className="barra-lateral">
      <BotaoBarraLateral titulo="Agenda" icone={<FaCalendarAlt />} />
      <BotaoBarraLateral titulo="Chat" icone={<FaComments />} />
      <BotaoBarraLateral titulo="Clientes" icone={<FaUserFriends />} />
      <BotaoBarraLateral titulo="Funcionários" icone={<FaUserTie />} />
    </div>
  );
};

export default BarraLateral;
