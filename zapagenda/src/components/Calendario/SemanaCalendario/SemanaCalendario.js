// SemanaCalendario.js
import React, { useContext } from "react";
import "./SemanaCalendario.css";
import { CalendarioContext } from "../../../context/CalendarioContext";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import CelulaCalendario from "../../CelulaCalendario/CelulaCalendario";
import { addDays, isSameDay, startOfWeek } from "date-fns";
import DiasDaSemana from "../DiasDaSemana/DiasDaSemana";

const SemanaCalendario = () => {
  const {
    dataSelecionada,
    formatarData,
    eHoje,
    selecionaDiaClicado,
    funcionarioSelecionado,
  } = useContext(CalendarioContext);

  const { agendamentos, aoClicarAgendamento } = useContext(AgendamentosContext);
  
  const inicioSemana = startOfWeek(dataSelecionada, { weekStartsOn: 0 });
  const semana = [];
  for (let i = 0; i < 7; i++) {
    semana.push(addDays(inicioSemana, i));
  }

  return (
    <>
      <DiasDaSemana />
      <div className="visualizacao-semana">
        {semana.map((dia, index) => {
          const agendamentosDoDia = agendamentos.filter(
            (agendamento) =>
              agendamento.data === formatarData(dia) &&
              (!funcionarioSelecionado ||
                agendamento.doutor === funcionarioSelecionado)
          );

          return (
            <CelulaCalendario
              key={index}
              data={dia}
              eMesAtual={true}
              eHoje={eHoje(dia)}
              agendamentos={agendamentosDoDia}
              onClick={selecionaDiaClicado}
              aoClicarAgendamento={aoClicarAgendamento}
              classeAdicional={
                eHoje(dia)
                  ? ""
                  : isSameDay(dia, dataSelecionada)
                    ? "seleciona"
                    : ""
              }
              semana={true}
            />
          );
        })}
      </div>
    </>

  );
};

export default SemanaCalendario;
