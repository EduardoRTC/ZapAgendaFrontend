import React from "react";
import "./PopupAgendamento.css";

export default function PopupAgendamento({ agendamento, aoFechar }) {
  return (
    <>
      {/* Fundo acinzentado que escurece a tela */}
      <div className="popup-overlay" onClick={aoFechar}></div>

      {/* Popup de agendamento */}
      <div className="popup-agendamento">
        <div className="popup-conteudo">
          <button className="fechar-popup" onClick={aoFechar}>
            &times;
          </button>
          <h2 className="titulo-popup">Detalhes do agendamento</h2>
          <div className="info-popup">
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
              <strong>Motivo da consulta:</strong> {agendamento.razao}
            </p>
            <p>
              <strong>Plano de saúde:</strong> {agendamento.planoDeSaude}
            </p>
            <div className="anexos-popup">
              <strong>Anexos:</strong>
              {agendamento.anexos.length > 0 ? (
                agendamento.anexos.map((anexo, index) => (
                  <span key={index} className="anexo-item">
                    {anexo}
                  </span>
                ))
              ) : (
                <span> Sem anexos</span>
              )}
            </div>
            <div className="observacoes-popup">
              <strong>Observações:</strong>
              <p>{agendamento.observations || "Sem observações."}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
