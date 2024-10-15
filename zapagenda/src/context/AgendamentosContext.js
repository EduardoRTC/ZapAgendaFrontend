import React, { createContext, useEffect, useState, useContext } from "react";
import { format, isSameDay, parse, parseISO, compareAsc } from "date-fns";
import { appointments } from "./appointmentsData"; // Dados dos agendamentos
import PopupAgendamento from "../components/PopupAgendamento/PopupAgendamento";
import { CalendarioContext } from "./CalendarioContext";

export const AgendamentosContext = createContext();

export default function AgendamentosProvider({ children }) {
  const { dataSelecionada, funcionarioSelecionado } =
    useContext(CalendarioContext);
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentoSelecionado, definirAgendamentoSelecionado] =
    useState(null);
  const [mostrarPopup, setMostrarPopup] = useState(false); // Estado para o popup

  useEffect(() => {
    // Carrega os agendamentos do arquivo appointmentsData.js
    setAgendamentos(appointments);
  }, []);

  // Função para abrir o popup
  const aoClicarAgendamento = (agendamento) => {
    definirAgendamentoSelecionado(agendamento);
    setMostrarPopup(true);
  };

  // Função para fechar o popup
  const fecharPopup = () => {
    setMostrarPopup(false);
    definirAgendamentoSelecionado(null);
  };

  // Função para filtrar agendamentos do dia selecionado e, se necessário, por funcionário
  const filtrarAgendamentosPorDia = (data) => {
    return agendamentos.filter(
      (agendamento) =>
        isSameDay(parse(agendamento.data, "yyyy-MM-dd", new Date()), data) &&
        (!funcionarioSelecionado ||
          agendamento.doutor === funcionarioSelecionado)
    );
  };

  // Função para obter horários ordenados para o dia
  const obterHorariosParaDia = (data) => {
    const agendamentosHoje = filtrarAgendamentosPorDia(data);

    // Horários padrão de 8:00 às 18:00
    const horariosPadrao = Array.from({ length: 11 }, (_, i) => `${i + 8}:00`);

    // Extrair os horários dos agendamentos do dia
    const horariosAgendamentos = agendamentosHoje.map(
      (agendamento) => agendamento.horario
    );

    // Combinar e ordenar horários usando date-fns
    const todosHorarios = Array.from(
      new Set([...horariosPadrao, ...horariosAgendamentos])
    ).sort(
      (a, b) => parse(a, "HH:mm", new Date()) - parse(b, "HH:mm", new Date())
    );

    return todosHorarios;
  };

  // Função para obter os próximos 3 agendamentos baseados na hora atual
  const obterProximosAgendamentos = () => {
    const hoje = new Date();
    const horaAtual = format(hoje, "HH:mm");

    // Filtra os agendamentos do dia atual e que ocorrem após a hora atual
    const agendamentosDeHoje = agendamentos
      .filter((agendamento) => {
        return (
          isSameDay(parseISO(agendamento.data), hoje) &&
          compareAsc(
            parse(agendamento.horario, "HH:mm", hoje),
            parse(horaAtual, "HH:mm", hoje)
          ) > 0
        );
      })
      .sort((a, b) => {
        return compareAsc(
          parse(`${a.data}T${a.horario}`, "yyyy-MM-dd'T'HH:mm", hoje),
          parse(`${b.data}T${b.horario}`, "yyyy-MM-dd'T'HH:mm", hoje)
        );
      });

    // Retorna os próximos 3 agendamentos
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
        obterProximosAgendamentos, // Exportando a função dos próximos agendamentos
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
