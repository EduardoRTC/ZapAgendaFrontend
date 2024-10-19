import React from 'react'
import "./DiasDaSemana.css"

export default function DiasDaSemana() {
    return (
        <div className="dias-da-semana">
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia, index) => (
                <div key={index} className="dia-semana-calendario">
                    {dia}
                </div>
            ))}
        </div>
    )
}
