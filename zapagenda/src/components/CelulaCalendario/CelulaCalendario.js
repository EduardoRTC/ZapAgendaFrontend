import React, { useContext } from "react";
import "./CelulaCalendario.css";
import { AgendamentosContext } from "../../context/AgendamentosContext";
import { CalendarioContext } from "../../context/CalendarioContext";

const CelulaCalendario = ({
  data,
  eMesAtual,
  eHoje,
  agendamentos,
  onClick,
  classeAdicional = "",
  semana
}) => {

  const { modoVisualizacao } = useContext(CalendarioContext)
  const { aoClicarAgendamento } = useContext(AgendamentosContext)

  return (
    <div
      className={`celula-calendario ${classeAdicional} ${semana === true ? "celula-semana" : ""} ${eMesAtual ? "" : "fora-mes"} ${eHoje ? "hoje" : ""}`}
      onClick={() => onClick(data)}
    >
      <div className="data-celula">{data.getDate()}</div>
      <div className={modoVisualizacao === "mes" ? "lista-agendamentos" : "lista-agendamentos-semana"}>
        {agendamentos.map((agendamento) => (
          <div
            key={agendamento.id}
            className={`agendamento ${agendamento.tipo}`}
            onClick={(e) => {
              e.stopPropagation();
              aoClicarAgendamento(agendamento, eMesAtual);
            }}
          >
            <span className="ponto-agendamento"></span>
            <span className="descricao-agendamento">{`${agendamento.horario} | ${agendamento.doutor}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelulaCalendario;
