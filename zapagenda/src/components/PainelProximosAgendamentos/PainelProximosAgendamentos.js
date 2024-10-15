import React, { useContext } from "react";
import "./PainelProximosAgendamentos.css";
import { AgendamentosContext } from "../../context/AgendamentosContext";

const PainelProximosAgendamentos = () => {
  const { obterProximosAgendamentos } = useContext(AgendamentosContext); // Usando a função de contexto
  const proximosAgendamentos = obterProximosAgendamentos(); // Obtém os próximos agendamentos

  return (
    <div className="painel-proximos-agendamentos">
      <div className="cabecalho-painel">
        <h3>Próximos agendamentos</h3>
      </div>
      {proximosAgendamentos.length > 0 ? (
        <ul>
          {proximosAgendamentos.map((agendamento) => (
            <li key={agendamento.id}>
              <span className="hora-agendamento">{agendamento.horario}</span>
              <span className="paciente-agendamento">
                {agendamento.paciente}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="sem-agendamentos">Não há agendamentos para hoje.</p>
      )}
    </div>
  );
};

export default PainelProximosAgendamentos;
