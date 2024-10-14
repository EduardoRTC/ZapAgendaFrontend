// CalendarioContext.jsx
import { format, isToday } from 'date-fns';
import React, { createContext, useState } from 'react';

export const CalendarioContext = createContext();

export const CalendarioProvider = ({ children }) => {
  const [modoVisualizacao, setModoVisualizacao] = useState('mes'); // 'dia', 'semana', 'mes'
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  const formatarData = (data) => format(data, "yyyy-MM-dd");;

  const eHoje = (data) =>  isToday(data) ;

  const selecionaDiaClicado = (data) => {
    setDataSelecionada(data);
    setModoVisualizacao('dia');
  };

  const valor = {
    modoVisualizacao,
    setModoVisualizacao,
    dataSelecionada,
    setDataSelecionada,
    formatarData,
    eHoje,
    selecionaDiaClicado
  };

  return (
    <CalendarioContext.Provider value={valor}>
      {children}
    </CalendarioContext.Provider>
  );
};
