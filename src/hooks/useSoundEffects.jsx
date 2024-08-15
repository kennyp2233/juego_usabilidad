import { useRef } from 'react';
import Pop from '../sounds/pop.mp3';
import Hover from '../sounds/hover.mp3';
import Squeak from '../sounds/squeak.mp3';
import Ambience from '../sounds/ambience.mp3';
import MixPeas from '../sounds/mix-peas.mp3';
import PopFinish from '../sounds/pop-finish.mp3';

export const useSoundEffects = () => {
    const audioRefs = useRef({});
    const ambienceAudioRef = useRef(null);

    const defaultVolume = {
        [Pop]: 0.5,
        [Hover]: 0.25,
        [Squeak]: 0.05,
        [Ambience]: 0.15,
        [MixPeas]: 0.15,
        [PopFinish]: 0.15,
    };

    const playSound = (url, volume = defaultVolume[url], loop = false) => {
        if (!Number.isFinite(volume) || volume < 0 || volume > 1) {
            console.warn(`Valor de volumen no válido: ${volume}. Se usará el valor por defecto.`);
            volume = defaultVolume[url];
        }

        // Crear una nueva instancia de Audio cada vez
        const audio = new Audio(url);
        audio.volume = volume;
        audio.loop = loop;

        // Almacenar la referencia del audio
        if (!audioRefs.current[url]) {
            audioRefs.current[url] = [];
        }
        audioRefs.current[url].push(audio);

        // Reproducir el sonido
        audio.play().catch(err => console.warn('Error al reproducir el audio:', err));

        // Limpiar la referencia cuando el audio termine
        audio.onended = () => {
            const index = audioRefs.current[url].indexOf(audio);
            if (index > -1) {
                audioRefs.current[url].splice(index, 1);
            }
        };
    };

    const stopAllSounds = () => {
        Object.values(audioRefs.current).forEach(audioList => {
            audioList.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
        });
        audioRefs.current = {};
        if (ambienceAudioRef.current) {
            ambienceAudioRef.current.pause();
            ambienceAudioRef.current.currentTime = 0;
        }
    };

    const playAmbience = (volume = defaultVolume[Ambience], loop = true) => {
        if (ambienceAudioRef.current) {
            ambienceAudioRef.current.pause();
            ambienceAudioRef.current.currentTime = 0;
        }
        ambienceAudioRef.current = new Audio(Ambience);
        ambienceAudioRef.current.volume = volume;
        ambienceAudioRef.current.loop = loop;
        ambienceAudioRef.current.play().catch(err => console.warn('Error al reproducir el audio:', err));
    };

    return {
        playButtonClick: (volume = defaultVolume[Pop], loop = false) => playSound(Pop, volume, loop),
        playHover: (volume = defaultVolume[Hover], loop = false) => playSound(Hover, volume, loop),
        playSqueak: (volume = defaultVolume[Squeak], loop = false) => playSound(Squeak, volume, loop),
        playAmbience,
        playMixPeas: (volume = defaultVolume[MixPeas], loop = false) => playSound(MixPeas, volume, loop),
        playPopFinish: (volume = defaultVolume[PopFinish], loop = false) => playSound(PopFinish, volume, loop),
        stopAllSounds,
    };
};
