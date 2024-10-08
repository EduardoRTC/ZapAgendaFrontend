import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Recupera o token do localStorage

      if (!token) {
        window.location.href = '/login'; // Redireciona para o login se o token estiver ausente
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/dashboard', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Envia o token no cabeçalho Authorization
          },
        });

        if (response.ok) {
          const data = await response.json(); // Faz o parse da resposta JSON diretamente
          setUserData(data); // Atualiza os dados do usuário no estado
        } else {
          window.location.href = '/login'; // Redireciona para o login em caso de erro
        }
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
      <h1>Bem-vindo ao Dashboard, {userData.usuario}!</h1>
      {/* Adicione outros componentes ou funcionalidades conforme necessário */}
    </div>
  );
}
