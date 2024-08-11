// SimulatorContext.js
import React, { createContext, useContext, useState } from 'react';

const SimulatorContext = createContext();

export const SimulatorProvider = ({ children }) => {
    const [gameMode, setGameMode] = useState(null);
    const [peas, setPeas] = useState([]);
    const [currentScreen, setCurrentScreen] = useState('home');


    return (
        <SimulatorContext.Provider value={{
            gameMode, setGameMode,
            peas, setPeas,
            currentScreen, setCurrentScreen

        }}>
            {children}
        </SimulatorContext.Provider>
    );
};

export const useSimulator = () => useContext(SimulatorContext);
