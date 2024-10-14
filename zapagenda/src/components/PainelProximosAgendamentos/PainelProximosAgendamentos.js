// PainelProximosAgendamentos.jsx
import React, { useContext } from "react";
import "./PainelProximosAgendamentos.css";
import { AgendamentosContext } from "../../context/AgendamentosContext";

const PainelProximosAgendamentos = () => {
  const { agendamentos } = useContext(AgendamentosContext)
  const hoje = "2024-10-11"; // Data de hoje como string

  // Filtrar agendamentos de hoje
  const agendamentosDeHoje = agendamentos.filter(
    (agendamento) => agendamento.date === hoje
  );

  // Ordenar agendamentos por horário
  const agendamentosOrdenados = agendamentosDeHoje.sort((a, b) => {
    return a.time.localeCompare(b.time);
  });

  // Obter os próximos 3 agendamentos
  const proximosAgendamentos = agendamentosOrdenados.slice(0, 3);

  return (
    <div className="painel-proximos-agendamentos">
      <div className="cabecalho-painel">
        <h3>Próximos agendamentos</h3>
      </div>
      {proximosAgendamentos.length > 0 ? (
        <ul>
          {proximosAgendamentos.map((agendamento) => (
            <li key={agendamento.id}>
              <span className="hora-agendamento">{agendamento.time}</span>
              <span className="paciente-agendamento">{agendamento.patient}</span>
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
