// DiaCalendario.jsx
import React, { useContext } from 'react';
import { AgendamentosContext } from '../../../context/AgendamentosContext';
import { CalendarioContext } from '../../../context/CalendarioContext';
import './DiaCalendario.css';

export default function DiaCalendario() {
  const {
    dataSelecionada,
    formatarData,
    aoClicarAgendamento, // Importado do contexto
  } = useContext(CalendarioContext);

  const { agendamentos } = useContext(AgendamentosContext);

  const dataSelecionadaFormatada = formatarData(dataSelecionada);

  const agendamentosHoje = agendamentos.filter(
    (agendamento) => agendamento.data === dataSelecionadaFormatada
  );

  const horas = Array.from({ length: 11 }, (_, i) => i + 8); // Horas de 8 às 18

  return (
    <div className="programacao-dia">
      {horas.map((hora) => {
        const agendamentosNestaHora = agendamentosHoje.filter((agendamento) => {
          const horaAgendamento = parseInt(agendamento.horario.split(':')[0], 10);
          return horaAgendamento === hora;
        });

        return (
          <div key={hora} className="linha-programacao">
            <div className="hora-programacao">{`${hora}:00`}</div>
            <div className="agendamento-programacao">
              {agendamentosNestaHora.length > 0 ? (
                agendamentosNestaHora.map((agendamento) => (
                  <div
                    key={agendamento.id}
                    className={`item-agendamento ${agendamento.tipo}`}
                    onClick={() => aoClicarAgendamento(agendamento)}
                  >
                    {agendamento.descricao}
                  </div>
                ))
              ) : (
                <div className="sem-agendamento">-</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
