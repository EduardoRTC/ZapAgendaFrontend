import React, { createContext, useEffect, useState, useContext } from "react";
import { format, isSameDay, parse, parseISO, compareAsc } from "date-fns";
import { appointments } from "./appointmentsData";
import PopupAgendamento from "../components/PopupAgendamento/PopupAgendamento";
import { CalendarioContext } from "./CalendarioContext";

export const AgendamentosContext = createContext();

export default function AgendamentosProvider({ children }) {
  const { dataSelecionada, funcionarioSelecionado } = useContext(CalendarioContext);
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentoSelecionado, definirAgendamentoSelecionado] = useState(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  useEffect(() => {
    // Assume that appointments now include horarioInicio and horarioFim
    setAgendamentos(appointments);
  }, []);

  const aoClicarAgendamento = (agendamento) => {
    definirAgendamentoSelecionado(agendamento);
    setMostrarPopup(true);
  };

  const fecharPopup = () => {
    setMostrarPopup(false);
    definirAgendamentoSelecionado(null);
  };

  const filtrarAgendamentosPorDia = (data) => {
    return agendamentos.filter(
      (agendamento) =>
        isSameDay(parse(agendamento.data, "yyyy-MM-dd", new Date()), data) &&
        (!funcionarioSelecionado || agendamento.doutor === funcionarioSelecionado)
    );
  };

  const obterHorariosParaDia = (data) => {
    const horariosPadrao = Array.from({ length: 11 }, (_, i) => `${i + 8}:00`);
    return horariosPadrao;
  };

  const obterProximosAgendamentos = () => {
    const hoje = new Date();
    const horaAtual = format(hoje, "HH:mm");

    const agendamentosDeHoje = agendamentos
      .filter((agendamento) => {
        return (
          isSameDay(parseISO(agendamento.data), hoje) &&
          compareAsc(
            parse(agendamento.horarioInicio, "HH:mm", hoje),
            parse(horaAtual, "HH:mm", hoje)
          ) > 0
        );
      })
      .sort((a, b) => {
        return compareAsc(
          parse(`${a.data}T${a.horarioInicio}`, "yyyy-MM-dd'T'HH:mm", hoje),
          parse(`${b.data}T${b.horarioInicio}`, "yyyy-MM-dd'T'HH:mm", hoje)
        );
      });

    return agendamentosDeHoje.slice(0, 3);
  };

  return (
    <AgendamentosContext.Provider
      value={{
        agendamentos,
        aoClicarAgendamento,
        agendamentoSelecionado,
        filtrarAgendamentosPorDia,
        obterHorariosParaDia,
        obterProximosAgendamentos,
      }}
    >
      {children}

      {mostrarPopup && agendamentoSelecionado && (
        <PopupAgendamento
          agendamento={agendamentoSelecionado}
          aoFechar={fecharPopup}
        />
      )}
    </AgendamentosContext.Provider>
  );
}