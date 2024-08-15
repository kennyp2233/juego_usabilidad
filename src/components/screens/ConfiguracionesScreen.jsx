import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { useSimulator } from '../../context/SimulatorContext';

const ConfiguracionScreen = () => {
    const { setCurrentScreen, currentScreen } = useSimulator();
    const { playAmbience, stopAllSounds } = useSoundEffects();

    const [volume, setVolume] = useState(50); // Valor inicial del volumen
    const [isMuted, setIsMuted] = useState(false); // Estado de silencio

    // Actualizar volumen y manejar la música en función del estado de silencio
    useEffect(() => {
        if (isMuted) {
            stopAllSounds(); // Detiene todos los sonidos si está en silencio
        } else {
            playAmbience(volume / 100); // Reproduce música de fondo con el volumen actual
        }
    }, [volume, isMuted, playAmbience, stopAllSounds]);

    // Función para manejar el cambio en el control de volumen
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    // Función para manejar el cambio en el estado de silencio
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    if (currentScreen !== 'settings') return null;

    return (
        <div className="relative p-8 bg-white rounded-lg shadow-2xl overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-center">Configuración</h2>
            <div className="flex flex-col md:flex-row items-center">
                {/* Controles de volumen */}
                <div className="md:w-1/2 p-4">
                    <h3 className="text-xl font-semibold mb-4">Volumen musica</h3>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full"
                        disabled={isMuted}
                    />
                    <p className="text-lg mt-2">Nivel de volumen: {volume}</p>
                </div>
                {/* Control de silencio */}
                <div className="md:w-1/2 p-4 flex items-center">
                    <motion.button
                        onClick={toggleMute}
                        className={`px-4 py-2 rounded-lg text-white ${isMuted ? 'bg-red-500' : 'bg-blue-500'} hover:bg-opacity-80`}
                        whileHover={{ scale: 1.05 }}
                    >
                        {isMuted ? 'Desactivar Silencio' : 'Silenciar'}
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ConfiguracionScreen;
