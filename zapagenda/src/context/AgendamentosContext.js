// src/context/AgendamentosContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { appointments } from "./appointmentsData";
import PopupAgendamento from "../components/PopupAgendamento/PopupAgendamento"; // Importa o componente PopupAgendamento

export const AgendamentosContext = createContext();

export default function AgendamentosProvider({ children }) {
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentoSelecionado, definirAgendamentoSelecionado] =
    useState(null);

  // Estado para controlar a visibilidade do popup
  const [mostrarPopup, setMostrarPopup] = useState(false); // **Novo Estado Adicionado**

  // Função para lidar com o clique em um agendamento
  const aoClicarAgendamento = (agendamento) => {
    definirAgendamentoSelecionado(agendamento);
    setMostrarPopup(true); // **Novo Código Adicionado: Abre o popup ao selecionar um agendamento**
  };

  // Função para fechar o popup
  const fecharPopup = () => {
    setMostrarPopup(false);
    definirAgendamentoSelecionado(null);
  };

  useEffect(() => {
    // Carrega os agendamentos do appointmentsData.js
    setAgendamentos(appointments);

    /*
      const carregarAgendamentos = async () => {
        // Simulação de carregamento dos agendamentos
        // Substitua por uma chamada real à API, se necessário
        const data = await fetch('/api/agendamentos').then(res => res.json());
        definirDadosAgendamentos(data);
      };
      carregarAgendamentos();
    */
  }, []);

  return (
    <AgendamentosContext.Provider
      value={{
        setAgendamentos,
        agendamentos,
        agendamentoSelecionado,
        aoClicarAgendamento,
      }}
    >
      {children}

      {/* 
        O popup será exibido somente quando mostrarPopup for true e um agendamento estiver selecionado.
      */}
      {mostrarPopup && agendamentoSelecionado && (
        <PopupAgendamento
          agendamento={agendamentoSelecionado}
          aoFechar={fecharPopup}
        />
      )}
    </AgendamentosContext.Provider>
  );
}
