import React from 'react';
import { useSimulator } from '../context/SimulatorContext';

const GameModeSelector = () => {
    const { setGameMode, setCurrentScreen } = useSimulator();

    const selectMode = (mode) => {
        setGameMode(mode);
        setCurrentScreen(mode === 'narrative' ? 'intro' : 'sandbox');
    };

    return (
        <div>
            <button onClick={() => selectMode('narrative')}>Modo Narrativo</button>
            <button onClick={() => selectMode('sandbox')}>Modo Sandbox</button>
        </div>
    );
};

export default GameModeSelector;