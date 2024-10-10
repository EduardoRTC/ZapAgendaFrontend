import React, { useState } from 'react';
import { appointments } from './appointmentsData';
import CalendarCell from '../CalendarCell/CalendarCell';
import './Calendar.css';

const Calendar = () => {
  const [viewMode, setViewMode] = useState('month'); // 'day', 'week', 'month'
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setViewMode('day');
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const next = () => {
    let newDate = new Date(selectedDate);
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
    let newDate = new Date(selectedDate);
    if (viewMode === 'day') {
      newDate.setDate(newDate.getDate() - 1);
    } else if (viewMode === 'week') {
      newDate.setDate(newDate.getDate() - 7);
    } else if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setSelectedDate(newDate);
  };

  const renderHeaderTitle = () => {
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    if (viewMode === 'month' || viewMode === 'week') {
      return `${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
    }

    if (viewMode === 'day') {
      return `${selectedDate.getDate()} de ${monthNames[selectedDate.getMonth()]} de ${selectedDate.getFullYear()}`;
    }
  };

  const renderCalendar = () => {
    if (viewMode === 'day') {
      const hours = Array.from({ length: 12 }, (_, i) => i + 9);
      const formattedSelectedDate = formatDate(selectedDate);

      const appointmentsToday = appointments.filter(
        (appointment) => appointment.date === formattedSelectedDate
      );

      return (
        <div className="day-schedule">
          {hours.map((hour) => {
            const appointmentsAtThisHour = appointmentsToday.filter((appointment) => {
              const appointmentHour = parseInt(appointment.time.split(':')[0], 10);
              return appointmentHour === hour;
            });

            return (
              <div key={hour} className="schedule-row">
                <div className="schedule-hour">{`${hour}:00`}</div>
                <div className="schedule-appointment">
                  {appointmentsAtThisHour.length > 0 ? (
                    appointmentsAtThisHour.map((appointment) => (
                      <div key={appointment.id} className={`appointment-item ${appointment.type}`}>
                        {appointment.description}
                      </div>
                    ))
                  ) : (
                    <div className="no-appointment">-</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (viewMode === 'month') {
      const startOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      const endOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
      const startDayOfWeek = startOfMonth.getDay();
      const totalDaysInMonth = endOfMonth.getDate();
      const days = [];

      if (startDayOfWeek > 0) {
        const prevMonthEndDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate();
        for (let i = startDayOfWeek - 1; i >= 0; i--) {
          days.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, prevMonthEndDate - i));
        }
      }

      for (let i = 1; i <= totalDaysInMonth; i++) {
        days.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
      }

      return (
        <>
          <div className="calendar-header">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day, index) => (
              <div key={index} className="calendar-header-cell">
                {day}
              </div>
            ))}
          </div>
          <div className="calendar-body">
            {days.map((day, index) => {
              const appointmentsForDay = appointments.filter(
                (appointment) => appointment.date === formatDate(day)
              );

              return (
                <CalendarCell
                  key={index}
                  date={day}
                  isCurrentMonth={day.getMonth() === selectedDate.getMonth()}
                  isToday={isToday(day)}
                  appointments={appointmentsForDay}
                  onClick={handleDayClick} // Passa a função handleDayClick
                />
              );
            })}
          </div>
        </>
      );
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header-title">
        <h2>{renderHeaderTitle()}</h2>
      </div>
      <div className="calendar-controls">
        <button onClick={previous}>&lt;</button>
        <button onClick={() => setViewMode('day')}>Dia</button>
        <button onClick={() => setViewMode('week')}>Semana</button>
        <button onClick={() => setViewMode('month')}>Mês</button>
        <button onClick={next}>&gt;</button>
      </div>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
