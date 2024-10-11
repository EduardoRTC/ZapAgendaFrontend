import React from 'react';
import './AppointmentPopup.css';

export const AppointmentPopup = ({ appointment, onClose }) => {
  return (
    <div className="appointment-popup">
      <div className="appointment-popup-header">
        <h3>Detalhes do Agendamento</h3>
        <button
          className="close-button"
          onClick={(e) => {
            e.stopPropagation(); // Evita a propagação do clique no botão de fechar
            onClose(e);
          }}
        >
          &times;
        </button>
      </div>
      <div className="appointment-popup-content">
        <p><strong>Descrição:</strong> {appointment.description}</p>
        <p><strong>Médico:</strong> {appointment.doctor}</p>
        <p><strong>Paciente:</strong> {appointment.patient}</p>
        <p><strong>Data:</strong> {appointment.date}</p>
        <p><strong>Hora:</strong> {appointment.time}</p>
        <p><strong>Plano de Saúde:</strong> {appointment.healthPlan}</p>
        <p><strong>Motivo:</strong> {appointment.reason}</p>
        <p><strong>Observações:</strong> {appointment.observations}</p>
      </div>
    </div>
  );
};
