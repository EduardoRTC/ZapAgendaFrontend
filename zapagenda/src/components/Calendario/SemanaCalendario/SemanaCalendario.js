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

  const inicioSemana = new Date(dataSelecionada); //Cria uma nova instância do dia de hoje para não mutar a data selecionada
  const diaSemana = inicioSemana.getDay(); // Pega a data selecionada e descobre o dia da semana, cada dia da semana tendo um valor atribuido de 0 a 6 
  inicioSemana.setDate(inicioSemana.getDate() - diaSemana); // Transforma a variável InicioSemana para o primeiro dia da semana

  const semana = [];
  for (let i = 0; i < 7; i++) {
    const diaDaSemana = new Date(inicioSemana);
    diaDaSemana.setDate(inicioSemana.getDate() + i);
    semana.push(diaDaSemana);
  }

  return (
    <div className="visualizacao-semana">
      {semana.map((dia, index) => {
        const dataFormatadaDia = formatarData(dia);

        const agendamentosDoDia = agendamentos.filter(
          (agendamento) => agendamento.data === dataFormatadaDia
        );

        return (
          <CelulaCalendario
            key={index}
            data={dia}
            eMesAtual={true} 
            eHoje={eHoje(dia)}
            agendamentos={agendamentosDoDia}
            onClick={aoClicarDia}
            aoClicarAgendamento={aoClicarAgendamento}
            classeAdicional="celula-dia-semana" 
          />
        );
      })}
    </div>
  );
};

export default SemanaCalendario;
