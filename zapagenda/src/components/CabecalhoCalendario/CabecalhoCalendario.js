// CabecalhoCalendario.jsx
import React, { useContext } from 'react';
import { CalendarioContext } from '../../context/CalendarioContext';
import './CabecalhoCalendario.css';

const CabecalhoCalendario = () => {
  const { modoVisualizacao, dataSelecionada } = useContext(CalendarioContext);

  const nomesMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];

  const renderizarTituloCabecalho = () => {
    if (modoVisualizacao === 'mes' || modoVisualizacao === 'semana') {
      return `${nomesMeses[dataSelecionada.getMonth()]} ${dataSelecionada.getFullYear()}`;
    }
    if (modoVisualizacao === 'dia') {
      return `${dataSelecionada.getDate()} de ${nomesMeses[dataSelecionada.getMonth()]} de ${dataSelecionada.getFullYear()}`;
    }
  };

  return (
    <div className="titulo-cabecalho-calendario">
      <h2>{renderizarTituloCabecalho()}</h2>
    </div>
  );
};

export default CabecalhoCalendario;
