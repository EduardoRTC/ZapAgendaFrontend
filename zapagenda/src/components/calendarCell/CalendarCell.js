import React, { useState } from 'react';
import { AppointmentPopup } from '../AppointmentPopup/AppointmentPopup';
import './CalendarCell.css';

const CalendarCell = ({ date, isCurrentMonth, isToday, appointments, onClick }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const closePopup = (e) => {
    e.stopPropagation(); // Impede que o clique de fechar afete a célula do calendário
    setSelectedAppointment(null);
  };

  return (
    <div 
      className={`calendar-cell ${isCurrentMonth ? '' : 'outside-month'} ${isToday ? 'today' : ''}`} 
      onClick={() => onClick(date)} // Chama onClick com a data do dia clicado
    >
      <div className="cell-date">{date.getDate()}</div>
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`appointment ${appointment.type}`}
            onClick={(e) => {
              e.stopPropagation(); // Evita que o clique no agendamento acione o clique da célula
              handleAppointmentClick(appointment);
            }}
          >
            <span className="appointment-dot"></span>
            <span className="appointment-description">{appointment.description}</span>
          </div>
        ))}
      </div>

      {/* Renderiza o AppointmentPopup quando um agendamento é selecionado */}
      {selectedAppointment && (
        <div className="appointment-popup-overlay" onClick={e => e.stopPropagation()}>
          <AppointmentPopup appointment={selectedAppointment} onClose={closePopup} />
        </div>
      )}
    </div>
  );
};

export default CalendarCell;
