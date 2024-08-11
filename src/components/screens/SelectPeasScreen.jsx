import React from 'react';
import { useSimulator } from '../../context/SimulatorContext';

// SelectPeasScreen.js
const SelectPeasScreen = () => {
    const { setPeas, setCurrentScreen } = useSimulator();

    const selectPea = (type) => {
        // Lógica para seleccionar un guisante
        // Por ahora, simplemente añadimos el tipo a un array
        setPeas(prevPeas => [...prevPeas, type]);
    };

    const proceedToLab = () => {
        // Aquí podrías añadir una validación para asegurarte de que se han seleccionado dos guisantes
        setCurrentScreen('laboratory');
    };

    return (
        <div className="select-peas-screen">
            <h2>Selección de Guisantes</h2>
            <p>Dr. Guisante: "Para empezar, necesitamos dos guisantes especiales. ¡Ayúdame a elegirlos!"</p>
            <div className="pea-selection">
                <button onClick={() => selectPea('green-smooth')}>Verde Liso</button>
                <button onClick={() => selectPea('yellow-wrinkled')}>Amarillo Rugoso</button>
            </div>
            <button onClick={proceedToLab} className="proceed-button">
                Ir al Laboratorio
            </button>
        </div>
    );
};

export default SelectPeasScreen;