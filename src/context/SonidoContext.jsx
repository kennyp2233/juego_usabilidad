import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSoundEffects } from '../hooks/useSoundEffects';

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
    const { playAmbience, stopAllSounds } = useSoundEffects();
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        if (isMuted) {
            stopAllSounds();
        } else {
            playAmbience(volume / 100);
        }
    }, [volume, isMuted, playAmbience, stopAllSounds]);

    const toggleMute = () => setIsMuted(!isMuted);
    const handleVolumeChange = (newVolume) => setVolume(newVolume);

    return (
        <SoundContext.Provider value={{ volume, isMuted, toggleMute, handleVolumeChange }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSoundContext = () => useContext(SoundContext);
