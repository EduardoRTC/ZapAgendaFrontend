import React, { useContext } from "react";
import { CalendarioContext } from "../../context/CalendarioContext";
import FiltroFuncionarios from "./FiltroFuncionarios/FiltroFuncionarios";
import "./ControlesNavegacao.css";

const ControlesNavegacao = () => {
  const {
    modoVisualizacao,
    setModoVisualizacao,
    dataSelecionada,
    setDataSelecionada,
  } = useContext(CalendarioContext);

  const proximo = () => {
    const novaData = new Date(dataSelecionada);
    if (modoVisualizacao === "dia") {
      novaData.setDate(novaData.getDate() + 1);
    } else if (modoVisualizacao === "semana") {
      novaData.setDate(novaData.getDate() + 7);
    } else if (modoVisualizacao === "mes") {
      novaData.setMonth(novaData.getMonth() + 1);
    }
    setDataSelecionada(novaData);
  };

  const anterior = () => {
    const novaData = new Date(dataSelecionada);
    if (modoVisualizacao === "dia") {
      novaData.setDate(novaData.getDate() - 1);
    } else if (modoVisualizacao === "semana") {
      novaData.setDate(novaData.getDate() - 7);
    } else if (modoVisualizacao === "mes") {
      novaData.setMonth(novaData.getMonth() - 1);
    }
    setDataSelecionada(novaData);
  };

  const mesAno = dataSelecionada.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="controles-calendario">
      {/* Filtro de Funcionários no lado esquerdo */}
      <FiltroFuncionarios />

      {/* Título do mês e ano centralizado */}
      <div className="titulo">
        {mesAno.charAt(0).toUpperCase() + mesAno.slice(1)}
      </div>

      {/* Botões de navegação */}
      <div>
        <button onClick={anterior}>&lt;</button>
        <button
          onClick={() => setModoVisualizacao("dia")}
          className={modoVisualizacao === "dia" ? "selecionado" : ""}
        >
          Dia
        </button>
        <button
          onClick={() => setModoVisualizacao("semana")}
          className={modoVisualizacao === "semana" ? "selecionado" : ""}
        >
          Semana
        </button>
        <button
          onClick={() => setModoVisualizacao("mes")}
          className={modoVisualizacao === "mes" ? "selecionado" : ""}
        >
          Mês
        </button>
        <button onClick={proximo}>&gt;</button>
      </div>
    </div>
  );
};

export default ControlesNavegacao;
