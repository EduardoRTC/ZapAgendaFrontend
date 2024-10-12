// CalendarioPage.jsx
import React, { useEffect } from "react";
import Calendario from "../../components/Calendario/Calendario";
import { CalendarioProvider } from "../../context/CalendarioContext";
import "./CalendarioPage.css";
import BarraLateral from "../../components/BarraLateral/BarraLateral";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import PainelProximosAgendamentos from "../../components/PainelProximosAgendamentos/PainelProximosAgendamentos";

const CalendarioPage = () => {
  // const [dadosUsuario, setDadosUsuario] = useState(null);

  useEffect(() => {
    const buscarDadosUsuario = async () => {
      // Descomente essa parte quando quiser ativar a autenticação
      /*
      const token = localStorage.getItem('token'); // Recupera o token do localStorage

      if (!token) {
        window.location.href = '/login'; // Redireciona para o login se o token estiver ausente
        return;
      }

      try {
        const resposta = await fetch('http://localhost:3000/dashboard', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Envia o token no cabeçalho Authorization
          },
        });

        if (resposta.ok) {
          const dados = await resposta.json(); // Faz o parse da resposta JSON
          setDadosUsuario(dados); // Atualiza os dados do usuário no estado
        } else {
          window.location.href = '/login'; // Redireciona para o login em caso de erro
        }
      } catch (error) {
        console.error("Erro na requisição:", error); // Lida com erros de rede
      }
      */
      // Para fins de teste sem autenticação, você pode simplesmente simular um dado de usuário
    };

    buscarDadosUsuario();
  }, []);

  return (
    <div>
      <Cabecalho />
      <div className="container-principal">
        <BarraLateral />
        <div className="container-calendario">
          <CalendarioProvider>
            <Calendario />
            <PainelProximosAgendamentos />
          </CalendarioProvider>
        </div>
      </div>
    </div>
  );
};

export default CalendarioPage;
