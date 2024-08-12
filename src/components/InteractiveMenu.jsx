import React, { useState } from 'react';
import { PlayCircle, Beaker, Settings, Info, Menu } from 'lucide-react';
import { useSimulator } from '../context/SimulatorContext';
import Button from './atoms/Button';
import { useSoundEffects } from '../hooks/useSoundEffects';

import Doc from '../images/personajes/doctor.png';

const CentralMenu = () => {
    const { gameMode, setGameMode, setCurrentScreen } = useSimulator();
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const { playButtonClick, playSqueak } = useSoundEffects();
    const handleModeSelect = (mode) => {
        setGameMode(mode);
        setCurrentScreen(mode === 'narrative' ? 'intro' : 'sandbox');
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="absolute w-full min-h-dvh z-10 flex justify-center items-center">
            {/* Overlay semi-transparente */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={toggleMenu}
                    style={{ pointerEvents: 'auto' }} // Asegúrate de que el overlay no bloquee interacciones
                />
            )}

            {/* Botón para abrir/cerrar el menú */}
            <button
                onClick={toggleMenu}
                className={`absolute z-50 top-4 right-4 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}
            >
                <Menu size={24} />
            </button>

            {/* Menú central */}
            <div className={`relative w-fit h-fit bg-white rounded-lg shadow-2xl p-8 transform transition-all duration-300 ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <h1 className="text-3xl font-bold text-green-700 mb-6">Genética de Guisantes</h1>

                <div className="space-y-4">
                    <Button
                        onClick={() => handleModeSelect('narrative')}
                        icon={PlayCircle}
                        label="Modo Narrativo"
                        bgColor="bg-green-100"
                    />
                    <Button
                        onClick={() => handleModeSelect('sandbox')}
                        icon={Beaker}
                        label="Modo Sandbox"
                        bgColor="bg-yellow-100"
                    />
                    <Button
                        onClick={() => setCurrentScreen('settings')}
                        icon={Settings}
                        label="Configuración"
                        bgColor="bg-gray-100"
                    />
                    <Button
                        onClick={() => setCurrentScreen('about')}
                        icon={Info}
                        label="Acerca de"
                        bgColor="bg-blue-100"
                    />
                </div>

                <p className="mt-6 text-sm text-gray-500 text-center">
                    Versión 1.0 - Desarrollado GNOMA
                </p>
                <img
                    src={Doc}
                    alt="Personaje del juego"
                    className="absolute -top-0 -left-full w-72 h-auto animate-move-up-down hover:animate-move-up-down-shake"
                    onPointerEnter={playSqueak}
                />
            </div>


        </div>

    );
};

export default CentralMenu;