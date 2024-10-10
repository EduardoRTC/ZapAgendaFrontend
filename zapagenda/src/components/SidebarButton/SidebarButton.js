import React from 'react';
import './SidebarButton.css'; // Importando o CSS do botão

const SidebarButton = ({ title, icon }) => {
  return (
    <div className="sidebar-button">
      <span className="sidebar-button-icon">{icon}</span>
      <span className="sidebar-button-title">{title}</span>
    </div>
  );
};

export default SidebarButton;
