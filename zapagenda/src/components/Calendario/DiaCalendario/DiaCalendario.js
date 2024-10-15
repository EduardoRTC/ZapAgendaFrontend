import React, { useContext, useRef, useEffect } from "react";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import { CalendarioContext } from "../../../context/CalendarioContext";
import useArrasteMouse from "../../../hooks/useArrasteMouse";
import "./DiaCalendario.css";

export default function DiaCalendario() {
  const { dataSelecionada } = useContext(CalendarioContext);
  const {
    filtrarAgendamentosPorDia,
    obterHorariosParaDia,
    aoClicarAgendamento,
  } = useContext(AgendamentosContext);

  const agendamentosHoje = filtrarAgendamentosPorDia(dataSelecionada);
  const todosHorarios = obterHorariosParaDia(dataSelecionada);

  const referenciasAgendamentos = useRef([]);
  const { estaArrastando, ignorarProximoClique } = useArrasteMouse(
    referenciasAgendamentos
  );

  return (
    <div className="programacao-dia">
      {todosHorarios.map((horario, index) => {
        const agendamentosNesteHorario = agendamentosHoje.filter(
          (agendamento) => agendamento.horario === horario
        );

        return (
          <div key={horario} className="linha-programacao">
            <div className="hora-programacao">{horario}</div>
            <div
              className="agendamento-programacao"
              ref={(el) => (referenciasAgendamentos.current[index] = el)}
            >
              {agendamentosNesteHorario.length > 0 ? (
                agendamentosNesteHorario.map((agendamento) => (
                  <div
                    key={agendamento.id}
                    className={`item-agendamento ${agendamento.tipo}`}
                    onClick={() => {
                      if (
                        estaArrastando.current ||
                        ignorarProximoClique.current
                      ) {
                        ignorarProximoClique.current = false;
                        return;
                      }
                      aoClicarAgendamento(agendamento);
                    }}
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
