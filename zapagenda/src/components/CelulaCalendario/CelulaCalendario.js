// CelulaCalendario.jsx
import React from "react";
import "./CelulaCalendario.css";

const CelulaCalendario = ({
  data,
  eMesAtual,
  eHoje,
  agendamentos,
  onClick,
}) => {
  return (
    <div
      className={`celula-calendario ${eMesAtual ? "" : "fora-mes"} ${
        eHoje ? "hoje" : ""
      }`}
      onClick={() => onClick(data)}
    >
      <div className="data-celula">{data.getDate()}</div>
      <div className="lista-agendamentos">
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
            <div
              key={agendamento.id}
              className={`agendamento ${agendamento.tipo}`}
              onClick={(e) => {
                e.stopPropagation();
                // Lógica para abrir o popup
              }}
            >
              <span className="ponto-agendamento"></span>
              <span className="descricao-agendamento">
                {agendamento.descricao}
              </span>
            </div>
          ))
        ) : (
          <div className="sem-agendamentos"></div>
        )}
      </div>
    </div>
  );
};

export default CelulaCalendario;
