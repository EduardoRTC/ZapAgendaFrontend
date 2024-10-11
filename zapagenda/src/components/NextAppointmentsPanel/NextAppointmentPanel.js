// NextAppointmentsPanel.jsx
import React, { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import "./NextAppointmentsPanel.css";

const NextAppointmentsPanel = () => {
  const { appointments } = useContext(CalendarContext);
  const today = "2024-10-11"; // Data de hoje como string

  // Filtrar agendamentos de hoje
  const todayAppointments = appointments.filter(
    (appointment) => appointment.date === today
  );

  // Ordenar agendamentos por horário
  const sortedAppointments = todayAppointments.sort((a, b) => {
    return a.time.localeCompare(b.time);
  });

  // Obter os próximos 3 agendamentos
  const nextAppointments = sortedAppointments.slice(0, 3);

  return (
    <div className="next-appointments-panel">
      <div className="panel-header">
        <h3>Próximos agendamentos</h3>
      </div>
      {nextAppointments.length > 0 ? (
        <ul>
          {nextAppointments.map((appointment) => (
            <li key={appointment.id}>
              <span className="appointment-time">{appointment.time}</span>
              <span className="appointment-patient">{appointment.patient}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments">Não há agendamentos para hoje.</p>
      )}
    </div>
  );
};

export default NextAppointmentsPanel;
