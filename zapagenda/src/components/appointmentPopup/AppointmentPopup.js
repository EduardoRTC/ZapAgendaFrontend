// AppointmentPopup.jsx
import React from 'react';
import './AppointmentPopup.css';

const AppointmentPopup = ({ appointment, onClose }) => {
  return (
    <div className="appointment-popup">
      <div className="popup-content">
        <h3>{appointment.description}</h3>
        <p><strong>Médico:</strong> {appointment.doctor}</p>
        <p><strong>Paciente:</strong> {appointment.patient}</p>
        <p><strong>Data:</strong> {appointment.date}</p>
        <p><strong>Horário:</strong> {appointment.time}</p>
        <p><strong>Motivo:</strong> {appointment.reason}</p>
        <p><strong>Plano de Saúde:</strong> {appointment.healthPlan}</p>
        <p><strong>Observações:</strong> {appointment.observations}</p>
        <button className="popup-close" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default AppointmentPopup;
