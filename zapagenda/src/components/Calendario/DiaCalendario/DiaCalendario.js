import React, { useContext, useEffect, useRef } from "react";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import { CalendarioContext } from "../../../context/CalendarioContext";
import "./DiaCalendario.css";

export default function DiaCalendario() {
  const { dataSelecionada, formatarData, funcionarioSelecionado } =
    useContext(CalendarioContext);
  const { agendamentos, aoClicarAgendamento } = useContext(AgendamentosContext);

  const agendamentosHoje = agendamentos.filter(
    (agendamento) =>
      agendamento.data === formatarData(dataSelecionada) &&
      (!funcionarioSelecionado || agendamento.doutor === funcionarioSelecionado)
  );

  // Horários padrão (de 8:00 às 18:00 a cada hora)
  const horariosPadrao = Array.from({ length: 11 }, (_, i) => `${i + 8}:00`);

  // Extrair horários dos agendamentos
  const horariosAgendamentos = agendamentosHoje.map(
    (agendamento) => agendamento.horario
  );

  // Combina os horários padrão com os horários dos agendamentos
  const conjuntoDeHorarios = new Set([
    ...horariosPadrao,
    ...horariosAgendamentos,
  ]);

  // Ordenar os horários em ordem cronológica
  const todosHorarios = Array.from(conjuntoDeHorarios).sort((a, b) => {
    const [horaA, minutoA] = a.split(":").map(Number);
    const [horaB, minutoB] = b.split(":").map(Number);
    return horaA * 60 + minutoA - (horaB * 60 + minutoB);
  });

  const referenciasAgendamentos = useRef([]);
  const estaArrastando = useRef(false);
  const ignorarProximoClique = useRef(false);

  useEffect(() => {
    console.log("Valor da dataSelecionada:", dataSelecionada);
  }, [dataSelecionada]);

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
      estaArrastando.current = true; // Agora estamos arrastando
      const x = e.pageX - elemento.offsetLeft;
      const deslocamento = (x - inicioX) * 2; // Velocidade do scroll
      elemento.scrollLeft = scrollInicial - deslocamento;
    };

    const manipuladorMouseUp = () => {
      clicado = false;
      elemento.classList.remove("active");
      if (estaArrastando.current) {
        ignorarProximoClique.current = true; // Ignorar o próximo clique
      }
      estaArrastando.current = false;
    };

    const manipuladorMouseLeave = () => {
      clicado = false;
      elemento.classList.remove("active");
      if (estaArrastando.current) {
        ignorarProximoClique.current = true;
      }
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
        if (limpar) {
          limpar();
        }
      });
    };
  }, [agendamentosHoje]);

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
                        ignorarProximoClique.current = false; // Resetar após ignorar
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
