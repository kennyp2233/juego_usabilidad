import React from 'react';
import { motion } from 'framer-motion';
import VerdeLiso from '../../images/personajes/verde-liso.png';
import VerdeRugoso from '../../images/personajes/verde-rugoso.png';
import AmarilloRugoso from '../../images/personajes/amarillo-rugoso.png';
import AmarilloLiso from '../../images/personajes/amarillo-liso.png';
import { useSimulator } from '../../context/SimulatorContext';

const AcercaDeScreen = () => {
    const { setCurrentScreen, currentScreen } = useSimulator();
    if (currentScreen !== 'about') return null;

    return (
        <div className="relative p-8 bg-white rounded-lg shadow-2xl overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-center">Instrucciones del Juego</h2>
            <div className="flex flex-col md:flex-row">
                {/* Texto de instrucciones */}
                <div className="md:w-1/2 p-4">
                    <p className="mb-4 text-lg">
                        Bienvenido al juego de genética de guisantes.
                    </p>
                    <p className="mb-4 text-lg">
                        Aquí aprenderás sobre fenotipos y genotipos a través de diferentes modos de juego. Sigue las instrucciones a continuación para comenzar.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-lg">
                        <li>Selecciona un modo de juego desde el menú principal.</li>
                        <li>En el Modo Narrativo, sigue la historia y toma decisiones.</li>
                        <li>En el Modo Sandbox, experimenta libremente con los guisantes.</li>
                        <li>Haz clic en el primer guisante que deseas seleccionar.</li>
                        <li>Haz clic en el segundo guisante que deseas seleccionar.</li>
                        <li>Haz clic en el botón Generar nueva generación.</li>
                        <li>Observa los cambios en el fenotipo y genotipo de los guisantes a medida que juegas.</li>
                    </ul>
                    <p className="mt-4 text-lg">¡Diviértete y aprende sobre la genética!</p>
                </div>
                {/* Imágenes de personajes */}
                <div className="md:w-1/2 relative">
                    <motion.img
                        src={VerdeLiso}
                        alt="Guisante Verde Liso"
                        className="absolute top-0 left-0 w-1/3 h-auto"
                        initial={{ y: -10, opacity: 0.8, scale: 0.9 }}
                        animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.img
                        src={VerdeRugoso}
                        alt="Guisante Verde Rugoso"
                        className="absolute top-1/4 right-0 w-1/3 h-auto"
                        initial={{ y: -10, opacity: 0.8, scale: 0.9 }}
                        animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.img
                        src={AmarilloRugoso}
                        alt="Guisante Amarillo Rugoso"
                        className="absolute bottom-1/4 left-1/3 w-1/3 h-auto"
                        initial={{ y: -10, opacity: 0.8, scale: 0.9 }}
                        animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.img
                        src={AmarilloLiso}
                        alt="Guisante Amarillo Liso"
                        className="absolute bottom-0 right-1/4 w-1/3 h-auto"
                        initial={{ y: -10, opacity: 0.8, scale: 0.9 }}
                        animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AcercaDeScreen;
