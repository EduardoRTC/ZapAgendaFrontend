import React from "react";
import "./LeftSidebar.css"; // Importando o arquivo CSS
import SidebarButton from "../LeftSidebarButton/LeftSidebarButton";
import {
  FaCalendarAlt,
  FaComments,
  FaUserFriends,
  FaUserTie,
} from "react-icons/fa"; // Ícones

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
