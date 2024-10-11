// Calendar.jsx
import React, { useContext, useState } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import CalendarCell from "../CalendarCell/CalendarCell";
import NavigationControls from "../NavigationControls/NavigationControls";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import "./Calendar.css";

const Calendar = () => {
  const { viewMode, selectedDate, appointments, setViewMode, setSelectedDate } =
    useContext(CalendarContext);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setViewMode("day");
  };
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
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

  const renderCalendar = () => {
    if (viewMode === "day") {
      const hours = Array.from({ length: 11 }, (_, i) => i + 8); // Horas de 8 às 18
      const formattedSelectedDate = formatDate(selectedDate);

      const appointmentsToday = appointments.filter(
        (appointment) => appointment.date === formattedSelectedDate
      );

      return (
        <div className="day-schedule">
          {hours.map((hour) => {
            const appointmentsAtThisHour = appointmentsToday.filter(
              (appointment) => {
                const appointmentHour = parseInt(
                  appointment.time.split(":")[0],
                  10
                );
                return appointmentHour === hour;
              }
            );

            return (
              <div key={hour} className="schedule-row">
                <div className="schedule-hour">{`${hour}:00`}</div>
                <div className="schedule-appointment">
                  {appointmentsAtThisHour.length > 0 ? (
                    appointmentsAtThisHour.map((appointment) => (
                      <div
                        key={appointment.id}
                        className={`appointment-item ${appointment.type}`}
                        onClick={() => handleAppointmentClick(appointment)}
                      >
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
    } else if (viewMode === "week") {
      // Implementação da visualização de semana
      const startOfWeek = new Date(selectedDate);
      const dayOfWeek = startOfWeek.getDay(); // 0 (Dom) a 6 (Sáb)
      startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek); // Define para o domingo

      const days = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        days.push(date);
      }

      return (
        <div className="week-view">
          {days.map((day, index) => {
            const formattedDate = formatDate(day);
            const appointmentsForDay = appointments.filter(
              (appointment) => appointment.date === formattedDate
            );

            return (
              <div
                key={index}
                className={`week-day-cell ${isToday(day) ? "today" : ""}`}
                onClick={() => handleDayClick(day)}
              >
                <div className="cell-date">{day.getDate()}</div>
                <div className="appointments-list">
                  {appointmentsForDay.map((appointment) => (
                    <div
                      key={appointment.id}
                      className={`appointment ${appointment.type}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAppointmentClick(appointment);
                      }}
                    >
                      <span className="appointment-dot"></span>
                      <span className="appointment-description">
                        {appointment.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else if (viewMode === "month") {
      const startOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      );
      const endOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      );
      const startDayOfWeek = startOfMonth.getDay();
      const totalDaysInMonth = endOfMonth.getDate();
      const days = [];

      // Dias do mês anterior para preencher a primeira semana
      if (startDayOfWeek > 0) {
        const prevMonthEndDate = new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          0
        ).getDate();
        for (let i = startDayOfWeek - 1; i >= 0; i--) {
          days.push(
            new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth() - 1,
              prevMonthEndDate - i
            )
          );
        }
      }

      // Dias do mês atual
      for (let i = 1; i <= totalDaysInMonth; i++) {
        days.push(
          new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
        );
      }

      // Preenchimento dos dias restantes para completar a grade de 7x5
      while (days.length < 35) {
        const lastDay = days[days.length - 1];
        days.push(
          new Date(
            lastDay.getFullYear(),
            lastDay.getMonth(),
            lastDay.getDate() + 1
          )
        );
      }

      return (
        <>
          <div className="calendar-weekdays">
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(
              (day, index) => (
                <div key={index} className="calendar-weekday">
                  {day}
                </div>
              )
            )}
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
                  onClick={handleDayClick}
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
      <div className="calendar-header-container">
        <CalendarHeader />
        <NavigationControls />
      </div>
      {renderCalendar()}
    </div>
  );
};

export default Calendar;
