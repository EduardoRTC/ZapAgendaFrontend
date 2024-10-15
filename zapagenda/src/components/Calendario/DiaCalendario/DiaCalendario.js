import React, { useContext, useRef, useEffect } from "react";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import { CalendarioContext } from "../../../context/CalendarioContext";
import "./DiaCalendario.css";

export default function DiaCalendario() {
  const { dataSelecionada } = useContext(CalendarioContext); // Pega a data do Calendário
  const {
    filtrarAgendamentosPorDia,
    obterHorariosParaDia,
    aoClicarAgendamento,
  } = useContext(AgendamentosContext); // Funções do contexto de Agendamentos

  // Obter agendamentos do dia e horários ordenados
  const agendamentosHoje = filtrarAgendamentosPorDia(dataSelecionada);
  const todosHorarios = obterHorariosParaDia(dataSelecionada);

  const referenciasAgendamentos = useRef([]);
  const estaArrastando = useRef(false);
  const ignorarProximoClique = useRef(false);

  useEffect(() => {
    console.log("Data selecionada:", dataSelecionada);
  }, [dataSelecionada]);

  useEffect(() => {
    const funcoesDeLimpeza = referenciasAgendamentos.current.map((elemento) => {
      if (elemento) {
        if (elemento.scrollWidth > elemento.clientWidth) {
          elemento.classList.add("overflow");
          return habilitarArrasteScroll(elemento);
        } else {
          elemento.classList.remove("overflow");
        }
      }
      return null;
    });

    return () => {
      funcoesDeLimpeza.forEach((limpar) => {
        if (limpar) limpar();
      });
    };
  }, [agendamentosHoje]);

  // Função para habilitar o arraste
  function habilitarArrasteScroll(elemento) {
    let clicado = false;
    let inicioX;
    let scrollInicial;

    const manipuladorMouseDown = (e) => {
      clicado = true;
      elemento.classList.add("active");
      inicioX = e.pageX - elemento.offsetLeft;
      scrollInicial = elemento.scrollLeft;
      estaArrastando.current = false;
    };

    const manipuladorMouseMove = (e) => {
      if (!clicado) return;
      e.preventDefault();
      estaArrastando.current = true;
      const x = e.pageX - elemento.offsetLeft;
      const deslocamento = (x - inicioX) * 2;
      elemento.scrollLeft = scrollInicial - deslocamento;
    };

    const manipuladorMouseUp = () => {
      clicado = false;
      elemento.classList.remove("active");
      if (estaArrastando.current) ignorarProximoClique.current = true;
      estaArrastando.current = false;
    };

    const manipuladorMouseLeave = () => {
      clicado = false;
      elemento.classList.remove("active");
      if (estaArrastando.current) ignorarProximoClique.current = true;
      estaArrastando.current = false;
    };

    elemento.addEventListener("mousedown", manipuladorMouseDown);
    elemento.addEventListener("mousemove", manipuladorMouseMove);
    elemento.addEventListener("mouseup", manipuladorMouseUp);
    elemento.addEventListener("mouseleave", manipuladorMouseLeave);

    return () => {
      elemento.removeEventListener("mousedown", manipuladorMouseDown);
      elemento.removeEventListener("mousemove", manipuladorMouseMove);
      elemento.removeEventListener("mouseup", manipuladorMouseUp);
      elemento.removeEventListener("mouseleave", manipuladorMouseLeave);
    };
  }

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
