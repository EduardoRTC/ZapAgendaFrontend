import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import Header from "../../components/Header/MainHeader/Header";
import Sidebar from "../../components/LeftSidebar/LeftSidebar";
import { CalendarProvider } from "../../context/CalendarContext";
import "./AutenticatedCalendarPage.css";
import NextAppointmentsPanel from "../../components/NextAppointmentsPanel/NextAppointmentPanel";

const AuthenticatedCalendar = () => {
  // const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      // Descomente essa parte quando quiser ativar a autenticação
      /*
      const token = localStorage.getItem('token'); // Recupera o token do localStorage

      if (!token) {
        window.location.href = '/login'; // Redireciona para o login se o token estiver ausente
        return;
      }
      */

      try {
        // Descomente isso quando a autenticação estiver ativada
        /*
        const response = await fetch('http://localhost:3000/dashboard', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Envia o token no cabeçalho Authorization
          },
        });

        if (response.ok) {
          const data = await response.json(); // Faz o parse da resposta JSON
          setUserData(data); // Atualiza os dados do usuário no estado
        } else {
          window.location.href = '/login'; // Redireciona para o login em caso de erro
        }
        */
        // Para fins de teste sem autenticação, você pode simplesmente simular um dado de usuário
      } catch (error) {
        console.error("Erro na requisição:", error); // Lida com erros de rede
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="calendar-container">
          <CalendarProvider>
            <Calendar />
            <NextAppointmentsPanel />
          </CalendarProvider>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedCalendar;
