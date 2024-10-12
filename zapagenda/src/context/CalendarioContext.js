// CalendarioContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const CalendarioContext = createContext();

export const CalendarioProvider = ({ children }) => {
  const [modoVisualizacao, setModoVisualizacao] = useState('mes'); // 'dia', 'semana', 'mes'
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [dataFormatada, setDataFormatada] = useState('');

  // Novo estado para agendamentoSelecionado
  const [agendamentoSelecionado, definirAgendamentoSelecionado] = useState(null);

  const formatarData = (data) => {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  };

  useEffect(() => {
    setDataFormatada(formatarData(dataSelecionada));
  }, [dataSelecionada]);

  const eHoje = (data) => {
    const hoje = new Date();
    return (
      data.getDate() === hoje.getDate() &&
      data.getMonth() === hoje.getMonth() &&
      data.getFullYear() === hoje.getFullYear()
    );
  };

  const aoClicarDia = (data) => {
    setDataSelecionada(data);
    setModoVisualizacao('dia');
  };

  // Definindo a função aoClicarAgendamento
  const aoClicarAgendamento = (agendamento) => {
    definirAgendamentoSelecionado(agendamento);
  };

  const valor = {
    modoVisualizacao,
    setModoVisualizacao,
    dataSelecionada,
    setDataSelecionada,
    dataFormatada,
    formatarData,
    eHoje,
    aoClicarDia,
    agendamentoSelecionado,
    definirAgendamentoSelecionado,
    aoClicarAgendamento, // Adicionado ao valor do contexto
  };

  return (
    <CalendarioContext.Provider value={valor}>
      {children}
    </CalendarioContext.Provider>
  );
};
