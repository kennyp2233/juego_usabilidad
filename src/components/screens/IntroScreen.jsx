import React from 'react';
import { useSimulator } from '../../context/SimulatorContext';

// IntroScreen.js
const IntroScreen = () => {
    const { setCurrentScreen } = useSimulator();

    return (
        <div className="intro-screen">
            <h1>¡Bienvenido al Laboratorio Guisante!</h1>
            <div className="dr-guisante-avatar">
                {/* Aquí iría la imagen o animación del Dr. Guisante */}
            </div>
            <p>Soy el Dr. Guisante, y juntos descubriremos los secretos de la genética.</p>
            <button onClick={() => setCurrentScreen('selectPeas')}>
                Comenzar Aventura
            </button>
        </div>
    );
};

export default IntroScreen;