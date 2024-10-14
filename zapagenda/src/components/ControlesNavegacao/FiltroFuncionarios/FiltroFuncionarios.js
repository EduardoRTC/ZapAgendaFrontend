// SelecaoFuncionario.jsx
import React, { useContext } from "react";
import { CalendarioContext } from "../../../context/CalendarioContext";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import "./FiltroFuncionarios.css";

const FiltroFuncionarios = () => {
  const { funcionarioSelecionado, setFuncionarioSelecionado } =
    useContext(CalendarioContext);
  const { agendamentos } = useContext(AgendamentosContext);

  // Extrair a lista de funcionários (doutores) dos agendamentos
  const listaFuncionarios = [
    ...new Set(agendamentos.map((agendamento) => agendamento.doutor)),
  ];

  return (
    <div className="selecao-funcionario">
      <select
        id="funcionario-select"
        value={funcionarioSelecionado || ""}
        onChange={(e) => setFuncionarioSelecionado(e.target.value || null)}
      >
        <option value="">Todos os funcionários</option>
        {listaFuncionarios.map((funcionario, index) => (
          <option key={index} value={funcionario}>
            {funcionario}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroFuncionarios;
