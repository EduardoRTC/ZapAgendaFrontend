import React, { useEffect, useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';

const AuthenticatedCalendar = () => {
  const [userData, setUserData] = useState(null);

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
        const data = { usuario: 'Teste Usuário' };
        setUserData(data); // Atualiza os dados do usuário com um valor simulado

      } catch (error) {
        console.error('Erro na requisição:', error); // Lida com erros de rede
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Carregando...</p>; // Mostra o carregando até que os dados estejam disponíveis
  }

  return (
    <div>
      <h1>Bem-vindo ao Calendário, {userData.usuario}!</h1>
      <Calendar />
    </div>
  );
};

export default AuthenticatedCalendar;
