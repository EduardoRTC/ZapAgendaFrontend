import React, { useContext, useEffect, useRef } from "react";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import { CalendarioContext } from "../../../context/CalendarioContext";
import "./DiaCalendario.css";

export default function DiaCalendario() {
  const { dataSelecionada, formatarData } = useContext(CalendarioContext);
  const { agendamentos, aoClicarAgendamento } = useContext(AgendamentosContext);

  const agendamentosHoje = agendamentos.filter(
    (agendamento) => agendamento.data === formatarData(dataSelecionada)
  );

  const horas = Array.from({ length: 11 }, (_, i) => i + 8); // Horas de 8 às 18

  const agendamentoRefs = useRef([]);
  const isDraggingRef = useRef(false);
  const ignoreNextClickRef = useRef(false);

  useEffect(() => {
    console.log("Valor da dataSelecionada:", dataSelecionada);
  }, [dataSelecionada]);

  // Função para habilitar o arraste
  function enableDragScroll(el) {
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      el.classList.add("active");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      isDraggingRef.current = false;
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      isDraggingRef.current = true; // Agora estamos arrastando
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2; // Velocidade do scroll
      el.scrollLeft = scrollLeft - walk;
    };

    const mouseUpHandler = () => {
      isDown = false;
      el.classList.remove("active");
      if (isDraggingRef.current) {
        ignoreNextClickRef.current = true; // Ignorar o próximo clique
      }
      isDraggingRef.current = false;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
      el.classList.remove("active");
      if (isDraggingRef.current) {
        ignoreNextClickRef.current = true;
      }
      isDraggingRef.current = false;
    };

    el.addEventListener("mousedown", mouseDownHandler);
    el.addEventListener("mousemove", mouseMoveHandler);
    el.addEventListener("mouseup", mouseUpHandler);
    el.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      el.removeEventListener("mousedown", mouseDownHandler);
      el.removeEventListener("mousemove", mouseMoveHandler);
      el.removeEventListener("mouseup", mouseUpHandler);
      el.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }

  useEffect(() => {
    const cleanups = agendamentoRefs.current.map((el) => {
      if (el) {
        if (el.scrollWidth > el.clientWidth) {
          el.classList.add("overflow");
          return enableDragScroll(el);
        } else {
          el.classList.remove("overflow");
        }
      }
      return null;
    });

    return () => {
      cleanups.forEach((cleanup) => {
        if (cleanup) {
          cleanup();
        }
      });
    };
  }, [agendamentosHoje]);

  return (
    <div className="programacao-dia">
      {horas.map((hora) => {
        const agendamentosNestaHora = agendamentosHoje.filter((agendamento) => {
          const horaAgendamento = parseInt(
            agendamento.horario.split(":")[0],
            10
          );
          return horaAgendamento === hora;
        });

        return (
          <div key={hora} className="linha-programacao">
            <div className="hora-programacao">{`${hora}:00`}</div>
            <div
              className="agendamento-programacao"
              ref={(el) => (agendamentoRefs.current[hora - 8] = el)}
            >
              {agendamentosNestaHora.length > 0 ? (
                agendamentosNestaHora.map((agendamento) => (
                  <div
                    key={agendamento.id}
                    className={`item-agendamento ${agendamento.tipo}`}
                    onClick={() => {
                      if (isDraggingRef.current || ignoreNextClickRef.current) {
                        ignoreNextClickRef.current = false; // Resetar após ignorar
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
