import React from 'react'
import logoEG from "../../../assets/Logos/logoEG.png"
import "./HeaderLogin.css"
import { FaRegUserCircle as UserIcon } from "react-icons/fa";

export default function HeaderLogin() {
  return (
    <header className='HeaderLogin'>
        <div className='HeaderLogin-logo'>
            <img src={logoEG} alt='Logo com a letra E e G'/>
        </div>
        <div className='HeaderLogin-icon'>
            <UserIcon color='white' size={30}/>
            <h2 className='HeaderLogin-icon__text'>Login</h2>
        </div>
    </header>
  )
}
