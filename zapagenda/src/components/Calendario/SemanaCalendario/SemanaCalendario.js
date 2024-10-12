// SemanaCalendario.jsx
import React, { useContext } from 'react';
import './SemanaCalendario.css'; // Certifique-se de criar o arquivo de estilos, se necessário.
import { CalendarioContext } from '../../../context/CalendarioContext';
import { AgendamentosContext } from '../../../context/AgendamentosContext';

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
          <div
            key={index}
            className={`celula-dia-semana ${eHoje(dia) ? 'hoje' : ''}`}
            onClick={() => aoClicarDia(dia)}
          >
            <div className="data-celula">{dia.getDate()}</div>
            <div className="lista-agendamentos">
              {agendamentosDoDia.map((agendamento) => (
                <div
                  key={agendamento.id}
                  className={`agendamento ${agendamento.tipo}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    aoClicarAgendamento(agendamento);
                  }}
                >
                  <span className="ponto-agendamento"></span>
                  <span className="descricao-agendamento">
                    {agendamento.descricao}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SemanaCalendario;
