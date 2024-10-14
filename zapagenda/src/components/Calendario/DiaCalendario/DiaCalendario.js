import React, { useContext, useEffect } from "react";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import { CalendarioContext } from "../../../context/CalendarioContext";
import "./DiaCalendario.css";

export default function DiaCalendario() {
  const { dataSelecionada, formatarData } = useContext(CalendarioContext);
  const { agendamentos, aoClicarAgendamento } = useContext(AgendamentosContext);

  const agendamentosHoje = agendamentos.filter(
    (agendamento) => agendamento.data === formatarData(dataSelecionada)
  );

  const horas = Array.from({ length: 11 }, (_, i) => i + 8); // Horas de 8 às 18

  useEffect(() => {
    console.log("Valor da dataSelecionada:", dataSelecionada);
  }, [dataSelecionada]);

  return (
    <div className="programacao-dia">
      {horas.map((hora) => {
        const agendamentosNestaHora = agendamentosHoje.filter((agendamento) => {
          const horaAgendamento = parseInt(
            agendamento.horario.split(":")[0],
            10
          );
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
                    {agendamento.horario} | {agendamento.doutor}
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
