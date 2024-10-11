// CalendarContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { appointments } from './appointmentsData'; // Ajuste o caminho conforme necessário

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState('month'); // 'day', 'week', 'month'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    // Carrega os agendamentos do appointmentsData.js
    setAppointmentsData(appointments);

    // Comentado o código que buscava agendamentos
    /*
    const fetchAppointments = async () => {
      // Simulação de carregamento dos agendamentos
      // Substitua por uma chamada real à API, se necessário
      const data = await fetch('/api/appointments').then(res => res.json());
      setAppointments(data);
    };
    fetchAppointments();
    */
  }, []);

  const value = {
    viewMode,
    setViewMode,
    selectedDate,
    setSelectedDate,
    appointments: appointmentsData,
  };

  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
};
