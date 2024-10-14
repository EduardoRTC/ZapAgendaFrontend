// PopupAgendamento.jsx
import React from "react";
import "./PopupAgendamento.css";

const PopupAgendamento = ({ agendamento, aoFechar }) => {
  return (
    <div className="popup-agendamento">
      <div className="conteudo-popup">
        <h3>{agendamento.descricao}</h3>
        <p>
          <strong>Médico:</strong> {agendamento.doutor}
        </p>
        <p>
          <strong>Paciente:</strong> {agendamento.paciente}
        </p>
        <p>
          <strong>Data:</strong> {agendamento.data}
        </p>
        <p>
          <strong>Horário:</strong> {agendamento.horario}
        </p>
        <p>
          <strong>Motivo:</strong> {agendamento.reason}
        </p>
        <p>
          <strong>Plano de Saúde:</strong> {agendamento.planoDeSaude}
        </p>
        <p>
          <strong>Observações:</strong> {agendamento.observations}
        </p>
        <button className="fechar-popup" onClick={aoFechar}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default PopupAgendamento;
