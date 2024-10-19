import React, { useContext } from "react";
import { CalendarioContext } from "../../context/CalendarioContext";
import FiltroFuncionarios from "./FiltroFuncionarios/FiltroFuncionarios";
import { format, addDays, addMonths, subDays, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import "./ControlesNavegacao.css";

const ControlesNavegacao = () => {
  const {
    modoVisualizacao,
    setModoVisualizacao,
    dataSelecionada,
    setDataSelecionada,
  } = useContext(CalendarioContext);

  const proximo = () => {
    const novaData = modoVisualizacao === "dia"
      ? addDays(dataSelecionada, 1)
      : modoVisualizacao === "semana"
        ? addDays(dataSelecionada, 7)
        : addMonths(dataSelecionada, 1);

    setDataSelecionada(novaData);
  };

  const anterior = () => {
    const novaData = modoVisualizacao === "dia"
      ? subDays(dataSelecionada, 1)
      : modoVisualizacao === "semana"
        ? subDays(dataSelecionada, 7)
        : subMonths(dataSelecionada, 1);

    setDataSelecionada(novaData);
  };

  // Define o título de acordo com o modo de visualização
  const tituloData = modoVisualizacao === "dia"
    ? format(dataSelecionada, "d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : format(dataSelecionada, "MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div className="controles-calendario">
      {/* Filtro de Funcionários no lado esquerdo */}
      <FiltroFuncionarios />

      {/* Título do mês e ano centralizado */}
      <div className="titulo">
        {tituloData.charAt(0).toUpperCase() + tituloData.slice(1)}
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
