// CalendarHeader.jsx
import React, { useContext } from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import './CalendarHeader.css';

const CalendarHeader = () => {
  const { viewMode, selectedDate } = useContext(CalendarContext);

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];

  const renderHeaderTitle = () => {
    if (viewMode === 'month' || viewMode === 'week') {
      return `${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
    }
    if (viewMode === 'day') {
      return `${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]} de ${selectedDate.getFullYear()}`;
    }
  };

  return (
    <div className="calendar-header-title">
      <h2>{renderHeaderTitle()}</h2>
    </div>
  );
};

export default CalendarHeader;
