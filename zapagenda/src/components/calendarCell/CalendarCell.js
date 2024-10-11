// CalendarCell.jsx
import React from "react";
import "./CalendarCell.css";

const CalendarCell = ({
  date,
  isCurrentMonth,
  isToday,
  appointments,
  onClick,
}) => {
  return (
    <div
      className={`calendar-cell ${isCurrentMonth ? "" : "outside-month"} ${
        isToday ? "today" : ""
      }`}
      onClick={() => onClick(date)}
    >
      <div className="cell-date">{date.getDate()}</div>
      <div className="appointments-list">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div
              key={appointment.id}
              className={`appointment ${appointment.type}`}
              onClick={(e) => {
                e.stopPropagation();
                // Lógica para abrir o popup
              }}
            >
              <span className="appointment-dot"></span>
              <span className="appointment-description">
                {appointment.description}
              </span>
            </div>
          ))
        ) : (
          <div className="no-appointments"></div>
        )}
      </div>
    </div>
  );
};

export default CalendarCell;
