import React, { createContext, useEffect, useState } from 'react'
import { appointments } from './appointmentsData'; 

export const AgendamentosContext = createContext()

export default function AgendamentosProvider({ children }) {
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        // Carrega os agendamentos do dadosAgendamentos.js
        setAgendamentos(appointments);

        // Comentado o código que buscava agendamentos
        /*
        const carregarAgendamentos = async () => {
          // Simulação de carregamento dos agendamentos
          // Substitua por uma chamada real à API, se necessário
          const data = await fetch('/api/agendamentos').then(res => res.json());
          definirDadosAgendamentos(data);
        };
        carregarAgendamentos();
        */
    }, []);

    return (
        <AgendamentosContext.Provider value={{
            setAgendamentos,
            agendamentos
        }
        }>{children}</AgendamentosContext.Provider>
    )
}
