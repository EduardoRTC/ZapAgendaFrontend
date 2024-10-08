import React, { useState } from 'react';
import { AppointmentPopup } from '../appointmentPopup/AppointmentPopup';
import './CalendarCell.css';

const CalendarCell = ({ date, isCurrentMonth, isToday, appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const closePopup = () => {
    setSelectedAppointment(null);
  };

  return (
    <div className={`calendar-cell ${isCurrentMonth ? '' : 'outside-month'} ${isToday ? 'today' : ''}`}>
      <div className="cell-date">{date}</div>
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`appointment ${appointment.type}`}
            onClick={() => handleAppointmentClick(appointment)}
          >
            <span className="appointment-dot"></span>
            <span className="appointment-description">{appointment.description}</span>
          </div>
        ))}
      </div>
      {selectedAppointment && (
        <div className="appointment-popup-overlay">
          <div className="appointment-popup">
            <div className="appointment-popup-header">
              <h2>Detalhes do Agendamento</h2>
              <button className="close-button" onClick={closePopup}>&times;</button>
            </div>
            <div className="appointment-popup-content">
              <p><strong>Descrição:</strong> {selectedAppointment.description}</p>
              <p><strong>Médico:</strong> {selectedAppointment.doctor}</p>
              <p><strong>Paciente:</strong> {selectedAppointment.patient}</p>
              <p><strong>Data:</strong> {selectedAppointment.date}</p>
              <p><strong>Hora:</strong> {selectedAppointment.time}</p>
              <p><strong>Plano de Saúde:</strong> {selectedAppointment.healthPlan}</p>
              <p><strong>Motivo:</strong> {selectedAppointment.reason}</p>
              <p className="observations"><strong>Observações:</strong> {selectedAppointment.observations}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarCell;
