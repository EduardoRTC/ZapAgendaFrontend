import React, { useContext, useState } from "react";
import { CalendarioContext } from "../../../context/CalendarioContext";
import { AgendamentosContext } from "../../../context/AgendamentosContext";
import "./FiltroFuncionarios.css";

const FiltroFuncionarios = () => {
  const { funcionarioSelecionado, setFuncionarioSelecionado } =
    useContext(CalendarioContext);
  const { agendamentos } = useContext(AgendamentosContext);

  const [isOpen, setIsOpen] = useState(false);

  // Extrair a lista de funcionários (doutores) dos agendamentos
  const listaFuncionarios = [
    "Todos os funcionários",
    ...new Set(agendamentos.map((agendamento) => agendamento.doutor)),
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (funcionario) => {
    setFuncionarioSelecionado(
      funcionario === "Todos os funcionários" ? null : funcionario
    );
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-select" onClick={toggleDropdown}>
        {funcionarioSelecionado || "Todos os funcionários"}
        <span className={`dropdown-seta ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {listaFuncionarios.map((funcionario, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(funcionario)}
            >
              {funcionario}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FiltroFuncionarios;
