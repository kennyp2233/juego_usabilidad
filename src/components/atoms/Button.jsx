import React from 'react';
import { useSoundEffects } from '../../hooks/useSoundEffects';

const Button = ({ onClick, icon: Icon, label, bgColor }) => {
    const { playButtonClick, playHover } = useSoundEffects();
    return (
        <button
            onClick={() => {
                playButtonClick();
                onClick();
            }}
            onFocus={() => playHover()}
            onPointerEnter={() => playHover()}
            className={`w-full flex items-center justify-start space-x-2 p-3 ${bgColor} hover:bg-opacity-80 rounded transition-transform duration-200 transform hover:scale-105`}
        >
            <Icon size={24} />
            <span className="text-lg">{label}</span>
        </button>
    );
};

export default Button;
