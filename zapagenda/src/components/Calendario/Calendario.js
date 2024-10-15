// Calendario.jsx
import React, { useContext } from "react";
import { CalendarioContext } from "../../context/CalendarioContext";
import ControlesNavegacao from "../ControlesNavegacao/ControlesNavegacao";

import DiaCalendario from "./DiaCalendario/DiaCalendario.js";
import SemanaCalendario from "./SemanaCalendario/SemanaCalendario.js";
import MesCalendario from "./MesCalendario/MesCalendario.js";
import "./Calendario.css";

const Calendario = () => {
  const { modoVisualizacao } = useContext(CalendarioContext);

  const renderizarCalendario = () => {
    if (modoVisualizacao === "dia") {
      return <DiaCalendario />;
    } else if (modoVisualizacao === "semana") {
      return <SemanaCalendario />;
    } else if (modoVisualizacao === "mes") {
      return <MesCalendario />;
    }
  };

  return (
    <div className="calendario">
      <div className="container-cabecalho-calendario">
        <ControlesNavegacao />
      </div>
      {renderizarCalendario()}
    </div>
  );
};

export default Calendario;
