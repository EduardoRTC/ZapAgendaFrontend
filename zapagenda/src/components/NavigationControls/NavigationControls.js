// NavigationControls.jsx
import React, { useContext } from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import './NavigationControls.css';

const NavigationControls = () => {
  const { viewMode, setViewMode, selectedDate, setSelectedDate } = useContext(CalendarContext);

  const next = () => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() + 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() + 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setSelectedDate(newDate);
  };

  const previous = () => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setSelectedDate(newDate);
  };

  return (
    <div className="calendar-controls">
      <button onClick={previous}>&lt;</button>
      <button
        onClick={() => setViewMode('day')}
        className={viewMode === 'day' ? 'selected' : ''}
      >
        Dia
      </button>
      <button
        onClick={() => setViewMode('week')}
        className={viewMode === 'week' ? 'selected' : ''}
      >
        Semana
      </button>
      <button
        onClick={() => setViewMode('month')}
        className={viewMode === 'month' ? 'selected' : ''}
      >
        Mês
      </button>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default NavigationControls;
