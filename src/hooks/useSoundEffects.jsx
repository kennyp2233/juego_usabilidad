// useSoundEffects.js
import { useRef } from 'react';
import Pop from '../sounds/pop.mp3';
import Hover from '../sounds/hover.mp3';
import Squeak from '../sounds/squeak.mp3';
import Ambience from '../sounds/ambience.mp3';

// Hook personalizado para sonidos
export const useSoundEffects = () => {
    const audioRef = useRef({});

    const defaultVolume = {
        [Pop]: 0.5,
        [Hover]: 0.25,
        [Squeak]: 0.1,
        [Ambience]: 0.15,
        ['/sounds/pea-select.mp3']: 0.5,
        ['/sounds/cross-generate.mp3']: 0.5,
    };

    const playSound = (url, volume = defaultVolume[url], loop = false) => {
        if (!Number.isFinite(volume) || volume < 0 || volume > 1) {
            console.warn(`Valor de volumen no válido: ${volume}. Se usará el valor por defecto.`);
            volume = defaultVolume[url];
        }

        const audio = audioRef.current[url] || new Audio(url);
        audio.volume = volume;
        audio.loop = loop;

        // Guardar la instancia de audio en referencia
        audioRef.current[url] = audio;
        
        // Reproducir el sonido
        audio.play().catch(err => console.warn('Error al reproducir el audio:', err));
    };

    return {
        playButtonClick: (volume = defaultVolume[Pop], loop = false) => playSound(Pop, volume, loop),
        playHover: (volume = defaultVolume[Hover], loop = false) => playSound(Hover, volume, loop),
        playPeaSelect: (volume = defaultVolume['/sounds/pea-select.mp3'], loop = false) => playSound('/sounds/pea-select.mp3', volume, loop),
        playCrossGenerate: (volume = defaultVolume['/sounds/cross-generate.mp3'], loop = false) => playSound('/sounds/cross-generate.mp3', volume, loop),
        playSqueak: (volume = defaultVolume[Squeak], loop = false) => playSound(Squeak, volume, loop),
        playAmbience: (volume = defaultVolume[Ambience], loop = true) => playSound(Ambience, volume, loop),
    };
};
