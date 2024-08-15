import React from 'react';
import { motion } from 'framer-motion';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // Íconos de volumen
import { useSoundContext } from '../../context/SonidoContext';
import { useSimulator } from '../../context/SimulatorContext';

const ConfiguracionScreen = () => {
    const { currentScreen } = useSimulator();
    const { volume, isMuted, toggleMute, handleVolumeChange } = useSoundContext();

    if (currentScreen !== 'settings') return null;

    return (
        <div className="relative p-8 bg-white rounded-lg shadow-2xl overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-600">Configuración</h2>
            <div className="flex flex-col md:flex-row items-center">
                {/* Controles de volumen */}
                <div className="md:w-1/2 p-4 flex items-center">
                    <FaVolumeUp className="text-green-500 mr-2" size={24} />
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-4 text-green-800">Volumen música</h3>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={(e) => handleVolumeChange(e.target.value)}
                            className="w-full"
                            disabled={isMuted}
                        />
                        <p className="text-lg mt-2 text-green-600">Nivel de volumen: {volume}</p>
                    </div>
                </div>
                {/* Control de silencio */}
                <div className="md:w-1/2 p-4 flex items-center">
                    <motion.button
                        onClick={toggleMute}
                        className={`flex items-center px-4 py-2 rounded-lg text-white ${isMuted ? 'bg-green-600' : 'bg-green-400'} hover:bg-opacity-80`}
                        whileHover={{ scale: 1.05 }}
                    >
                        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
                        <span className="ml-2">{isMuted ? 'Desactivar Silencio' : 'Silenciar'}</span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ConfiguracionScreen;
