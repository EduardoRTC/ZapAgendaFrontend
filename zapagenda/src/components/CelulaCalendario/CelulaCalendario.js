// CelulaCalendario.jsx
import React from 'react';
import './CelulaCalendario.css';

const CelulaCalendario = ({
  data,
  eMesAtual,
  eHoje,
  agendamentos,
  onClick,
  aoClicarAgendamento, // Recebe a função como prop
}) => {
  return (
    <div
      className={`celula-calendario ${eMesAtual ? '' : 'fora-do-mes'} ${
        eHoje ? 'hoje' : ''
      }`}
      onClick={() => onClick(data)}
    >
      <div className="data-celula">{data.getDate()}</div>
      <div className="lista-agendamentos">
        {agendamentos.map((agendamento) => (
          <div
            key={agendamento.id}
            className={`agendamento ${agendamento.tipo}`}
            onClick={(e) => {
              e.stopPropagation();
              aoClicarAgendamento(agendamento);
            }}
          >
            <span className="ponto-agendamento"></span>
            <span className="descricao-agendamento">
              {agendamento.descricao}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelulaCalendario;