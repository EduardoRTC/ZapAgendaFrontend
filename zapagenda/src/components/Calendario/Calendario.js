// Calendario.jsx
import React, { useContext, useState } from "react";
import { CalendarioContext } from "../../context/CalendarioContext";
import CelulaCalendario from "../CelulaCalendario/CelulaCalendario";
import ControlesNavegacao from "../ControlesNavegacao/ControlesNavegacao";
import CabecalhoCalendario from "../CabecalhoCalendario/CabecalhoCalendario";
import "./Calendario.css";
import { AgendamentosContext } from "../../context/AgendamentosContext";

const Calendario = () => {
  const { modoVisualizacao, dataSelecionada,setModoVisualizacao, setDataSelecionada } = useContext(CalendarioContext);
  const { agendamentos } = useContext(AgendamentosContext)

  const aoClicarDia = (data) => {
    setDataSelecionada(data);
    setModoVisualizacao("dia");
  };
  const [agendamentoSelecionado, definirAgendamentoSelecionado] = useState(null);
  const aoClicarAgendamento = (agendamento) => {
    definirAgendamentoSelecionado(agendamento);
  };

  const formatarData = (data) => {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  };

  const eHoje = (data) => {
    const hoje = new Date();
    return (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    );
  };

  const renderizarCalendario = () => {
    if (modoVisualizacao === "dia") {
      const horas = Array.from({ length: 11 }, (_, i) => i + 8); // Horas de 8 às 18
      const dataSelecionadaFormatada = formatarData(dataSelecionada);

      const agendamentosHoje = agendamentos.filter(
        (agendamento) => agendamento.data === dataSelecionadaFormatada
      );

      return (
        <div className="programacao-dia">
          {horas.map((hora) => {
            const agendamentosNestaHora = agendamentosHoje.filter(
              (agendamento) => {
                const horaAgendamento = parseInt(
                  agendamento.horario.split(":")[0],
                  10
                );
                return horaAgendamento === hora;
              }
            );

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
    } else if (modoVisualizacao === "semana") {
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
            const dataFormatada = formatarData(dia);
            const agendamentosDoDia = agendamentos.filter(
              (agendamento) => agendamento.data === dataFormatada
            );

            return (
              <div
                key={index}
                className={`celula-dia-semana ${eHoje(dia) ? "hoje" : ""}`}
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
    } else if (modoVisualizacao === "mes") {
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
          new Date(dataSelecionada.getFullYear(), dataSelecionada.getMonth(), i)
        );
      }

      while (dias.length < 35) {
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
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(
              (dia, index) => (
                <div key={index} className="dia-semana-calendario">
                  {dia}
                </div>
              )
            )}
          </div>
          <div className="corpo-calendario">
            {dias.map((dia, index) => {
              const agendamentosDoDia = agendamentos.filter(
                (agendamento) => agendamento.data === formatarData(dia)
              );

              return (
                <CelulaCalendario
                  key={index}
                  data={dia}
                  eMesAtual={dia.getMonth() === dataSelecionada.getMonth()}
                  eHoje={eHoje(dia)}
                  agendamentos={agendamentosDoDia}
                  onClick={aoClicarDia}
                />
              );
            })}
          </div>
        </>
      );
    }
  };

  return (
    <div className="calendario">
      <div className="container-cabecalho-calendario">
        <CabecalhoCalendario />
        <ControlesNavegacao />
      </div>
      {renderizarCalendario()}
    </div>
  );
};

export default Calendario;
