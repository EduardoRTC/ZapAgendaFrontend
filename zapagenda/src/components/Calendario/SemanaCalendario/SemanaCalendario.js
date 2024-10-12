// SemanaCalendario.jsx
import React, { useContext } from 'react';
import './SemanaCalendario.css';
import { CalendarioContext } from '../../../context/CalendarioContext';
import { AgendamentosContext } from '../../../context/AgendamentosContext';
import CelulaCalendario from '../../CelulaCalendario/CelulaCalendario';

const SemanaCalendario = () => {
  const {
    dataSelecionada,
    formatarData,
    eHoje,
    aoClicarDia,
    aoClicarAgendamento,
  } = useContext(CalendarioContext);

  const { agendamentos } = useContext(AgendamentosContext);

  const inicioSemana = new Date(dataSelecionada);
  const diaSemana = inicioSemana.getDay();
  inicioSemana.setDate(inicioSemana.getDate() - diaSemana);

  const dias = [];
  for (let i = 0; i < 7; i++) {
    const data = new Date(inicioSemana);
    data.setDate(inicioSemana.getDate() + i);
    dias.push(data);
  }

  return (
    <div className="visualizacao-semana">
      {dias.map((dia, index) => {
        const dataFormatadaDia = formatarData(dia);

        const agendamentosDoDia = agendamentos.filter(
          (agendamento) => agendamento.data === dataFormatadaDia
        );

        return (
          <CelulaCalendario
            key={index}
            data={dia}
            eMesAtual={true} // Na visualização semanal, todos os dias são relevantes
            eHoje={eHoje(dia)}
            agendamentos={agendamentosDoDia}
            onClick={aoClicarDia}
            aoClicarAgendamento={aoClicarAgendamento}
            classeAdicional="celula-dia-semana" // Se precisar de estilos adicionais
          />
        );
      })}
    </div>
  );
};

export default SemanaCalendario;
