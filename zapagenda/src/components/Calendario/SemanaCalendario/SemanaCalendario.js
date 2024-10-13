import React, { useContext } from 'react';
import './SemanaCalendario.css';
import { CalendarioContext } from '../../../context/CalendarioContext';
import { AgendamentosContext } from '../../../context/AgendamentosContext';
import CelulaCalendario from '../../CelulaCalendario/CelulaCalendario';
import { addDays, startOfWeek } from 'date-fns';


const SemanaCalendario = () => {
  const {
    dataSelecionada,
    formatarData,
    eHoje,
    selecionaDiaClicado,
  } = useContext(CalendarioContext);

  const { agendamentos, aoClicarAgendamento } = useContext(AgendamentosContext);

  //Gera o calendário semanal
  const inicioSemana = startOfWeek(dataSelecionada, { weekStartsOn: 0 })
  const semana = [];
  for (let i = 0; i < 7; i++) {
    semana.push(addDays(inicioSemana, i))
  }

  return (
    <div className="visualizacao-semana">
      {semana.map((dia, index) => {

        const agendamentosDoDia = agendamentos.filter(
          (agendamento) => agendamento.data === formatarData(dia)
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
            classeAdicional="celula-dia-semana"
          />
        );
      })}
    </div>
  );
};

export default SemanaCalendario;
