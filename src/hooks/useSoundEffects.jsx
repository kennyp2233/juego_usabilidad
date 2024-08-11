// useSoundEffects.js
import { useRef } from 'react';

// Hook personalizado para sonidos
export const useSoundEffects = () => {
    const audioRef = useRef({});

    const playSound = (url) => {
        if (audioRef.current[url]) {
            audioRef.current[url].play();
        } else {
            const audio = new Audio(url);
            audioRef.current[url] = audio;
            audio.play();
        }
    };

    return {
        playButtonClick: () => playSound('/sounds/pop.mp3'),
        playHover: () => playSound('/sounds/hover.mp3'),
        playPeaSelect: () => playSound('/sounds/pea-select.mp3'),
        playCrossGenerate: () => playSound('/sounds/cross-generate.mp3'),
        playSqueak: () => playSound('/sounds/squeak.mp3'),
    };
};
