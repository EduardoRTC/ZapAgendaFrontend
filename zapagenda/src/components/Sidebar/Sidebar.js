import React from 'react';
import './Sidebar.css'; // Importando o arquivo CSS
import SidebarButton from '../SidebarButton/SidebarButton';
import { FaCalendarAlt, FaComments, FaUserFriends, FaUserTie } from 'react-icons/fa'; // Ícones

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarButton title="Agenda" icon={<FaCalendarAlt />} />
      <SidebarButton title="Chat" icon={<FaComments />} />
      <SidebarButton title="Clientes" icon={<FaUserFriends />} />
      <SidebarButton title="Funcionários" icon={<FaUserTie />} />
    </div>
  );
};

export default Sidebar;
