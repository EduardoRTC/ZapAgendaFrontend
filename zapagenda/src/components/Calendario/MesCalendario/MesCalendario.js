// MesCalendario.js
import React, { useContext, useEffect } from "react";
import "./MesCalendario.css";
import { CalendarioContext } from "../../../context/CalendarioContext";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import CelulaCalendario from "../../CelulaCalendario/CelulaCalendario";
import {
  endOfMonth,
  startOfMonth,
  subDays,
  addDays,
  isSameDay,
} from "date-fns";

const MesCalendario = () => {
  const {
    dataSelecionada,
    formatarData,
    eHoje,
    selecionaDiaClicado,
    funcionarioSelecionado,
  } = useContext(CalendarioContext);

  const { agendamentos, aoClicarAgendamento } = useContext(AgendamentosContext);

  const inicioMes = startOfMonth(dataSelecionada);
  const fimMes = endOfMonth(dataSelecionada);

  const diaInicioSemana = inicioMes.getDay();
  const totalDiasMes = fimMes.getDate();
  const dias = [];

  // Adiciona os dias do mês anterior para completar a semana
  for (let i = diaInicioSemana - 1; i >= 0; i--) {
    dias.push(subDays(inicioMes, i + 1));
  }

  // Adiciona os dias do mês atual
  for (let i = 1; i <= totalDiasMes; i++) {
    dias.push(
      new Date(dataSelecionada.getFullYear(), dataSelecionada.getMonth(), i)
    );
  }

  // Completa o restante com dias do próximo mês até preencher a grade semanal
  while (dias.length % 7 !== 0) {
    dias.push(addDays(dias[dias.length - 1], 1));
  }

  useEffect(() => {
    console.log("Data Selecionada:", dataSelecionada);
  }, [dataSelecionada]);

  return (
    <>
      <div className="dias-semana-calendario">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia, index) => (
          <div key={index} className="dia-semana-calendario">
            {dia}
          </div>
        ))}
      </div>
      <div className="corpo-calendario">
        {dias.map((dia, index) => {
          const dataFormatadaDia = formatarData(dia);
          const agendamentosDoDia = agendamentos.filter(
            (agendamento) =>
              agendamento.data === dataFormatadaDia &&
              (!funcionarioSelecionado ||
                agendamento.doutor === funcionarioSelecionado)
          );

          return (
            <React.Fragment key={index}>
              <CelulaCalendario
                data={dia}
                eMesAtual={dia.getMonth() === dataSelecionada.getMonth()}
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
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default MesCalendario;
