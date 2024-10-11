import React from "react";
import logoEG from "../../../assets/Logos/logoEG.png";
import "./Header.css";
import { FaRegUserCircle as UserIcon } from "react-icons/fa";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logoEG} alt="Logo com a letra E e G" />
        <span>ZapAgenda</span>
      </div>
      <div className="Header-icon">
        <UserIcon color="white" size={30} />
        <h2 className="Header-icon__text">Logout</h2>
      </div>
    </header>
  );
}
