// CalendarioContext.jsx
import React, { createContext, useState } from 'react';

export const CalendarioContext = createContext();

export const CalendarioProvider = ({ children }) => {
  const [modoVisualizacao, setModoVisualizacao] = useState('mes'); // 'dia', 'semana', 'mes'
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const valor = {
    modoVisualizacao,
    setModoVisualizacao,
    dataSelecionada,
    setDataSelecionada,
  };

  return <CalendarioContext.Provider value={valor}>{children}</CalendarioContext.Provider>;
};
