// CalendarioContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { appointments } from './appointmentsData'; // Ajuste o caminho conforme necessário

export const CalendarioContext = createContext();

export const CalendarioProvider = ({ children }) => {
  const [modoVisualizacao, setModoVisualizacao] = useState('mes'); // 'dia', 'semana', 'mes'
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [Agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    // Carrega os agendamentos do dadosAgendamentos.js
    setAgendamentos(appointments);

    // Comentado o código que buscava agendamentos
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

  const valor = {
    modoVisualizacao,
    setModoVisualizacao,
    dataSelecionada,
    setDataSelecionada,
    agendamentos: Agendamentos,
  };

  return <CalendarioContext.Provider value={valor}>{children}</CalendarioContext.Provider>;
};
