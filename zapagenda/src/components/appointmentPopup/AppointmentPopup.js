import React from 'react';
import './AppointmentPopup.css';  // Estilos específicos para o popup

export const AppointmentPopup = ({ appointment, onClose }) => {
  return (
    <div className="appointment-popup">
      <h3>Detalhes do Agendamento</h3>
      <p><strong>Descrição:</strong> {appointment.description}</p>
      <p><strong>Médico:</strong> {appointment.doctor}</p>
      <p><strong>Paciente:</strong> {appointment.patient}</p>
      <p><strong>Data:</strong> {appointment.date}</p>
      <p><strong>Hora:</strong> {appointment.time}</p>
      <p><strong>Plano de Saúde:</strong> {appointment.healthPlan}</p>
      <p><strong>Motivo:</strong> {appointment.reason}</p>
      <p><strong>Observações:</strong> {appointment.observations}</p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

