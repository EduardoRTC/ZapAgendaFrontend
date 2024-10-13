import React, { useContext } from 'react';
import './MesCalendario.css';
import { CalendarioContext } from '../../../context/CalendarioContext';
import { AgendamentosContext } from '../../../context/AgendamentosContext';
import CelulaCalendario from '../../CelulaCalendario/CelulaCalendario';

const MesCalendario = () => {
  const {
    dataSelecionada,
    formatarData,
    eHoje,
    aoClicarDia,
  } = useContext(CalendarioContext);

  const { agendamentos,aoClicarAgendamento } = useContext(AgendamentosContext);

  const inicioMes = new Date(
    dataSelecionada.getFullYear(),
    dataSelecionada.getMonth(),
    1
  );
  const fimMes = new Date(
    dataSelecionada.getFullYear(),
    dataSelecionada.getMonth() + 1,
    0
  );
  const diaInicioSemana = inicioMes.getDay();
  const totalDiasMes = fimMes.getDate();
  const dias = [];

  if (diaInicioSemana > 0) {
    const ultimoDiaMesAnterior = new Date(
      dataSelecionada.getFullYear(),
      dataSelecionada.getMonth(),
      0
    ).getDate();
    for (let i = diaInicioSemana - 1; i >= 0; i--) {
      dias.push(
        new Date(
          dataSelecionada.getFullYear(),
          dataSelecionada.getMonth() - 1,
          ultimoDiaMesAnterior - i
        )
      );
    }
  }

  for (let i = 1; i <= totalDiasMes; i++) {
    dias.push(
      new Date(
        dataSelecionada.getFullYear(),
        dataSelecionada.getMonth(),
        i
      )
    );
  }

  while (dias.length % 7 !== 0) {
    const ultimoDia = dias[dias.length - 1];
    dias.push(
      new Date(
        ultimoDia.getFullYear(),
        ultimoDia.getMonth(),
        ultimoDia.getDate() + 1
      )
    );
  }

  return (
    <>
      <div className="dias-semana-calendario">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(
          (dia, index) => (
            <div key={index} className="dia-semana-calendario">
              {dia}
            </div>
          )
        )}
      </div>
      <div className="corpo-calendario">
        {dias.map((dia, index) => {
          const dataFormatadaDia = formatarData(dia);

          const agendamentosDoDia = agendamentos.filter(
            (agendamento) => agendamento.data === dataFormatadaDia
          );

          return (
            <CelulaCalendario
              key={index}
              data={dia}
              eMesAtual={
                dia.getMonth() === dataSelecionada.getMonth()
              }
              eHoje={eHoje(dia)}
              agendamentos={agendamentosDoDia}
              onClick={aoClicarDia}
              aoClicarAgendamento={aoClicarAgendamento}
            />
          );
        })}
      </div>
    </>
  );
};

export default MesCalendario;
