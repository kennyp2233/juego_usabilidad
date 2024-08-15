import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSimulator } from '../../context/SimulatorContext';

const CalificacionScreen = () => {
    const { setCurrentScreen, currentScreen } = useSimulator();
    const [rating, setRating] = useState(0);

    if (currentScreen !== 'rating') return null;
    const handleSubmit = () => {
        // Aquí podrías manejar el envío de la calificación
        console.log('Rating submitted:', rating);

    };
    return (
        <div className="relative p-8 bg-white rounded-lg shadow-2xl overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-center">Califica el Juego</h2>
            <div className="flex flex-col items-center">
                {/* Aquí puedes incluir un mensaje o instrucciones sobre cómo calificar */}
                <p className="mb-4 text-lg text-center">
                    Tu opinión es importante para nosotros. Por favor, califica tu experiencia con el juego.
                </p>
                <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                            onClick={() => setRating(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={handleSubmit}
                    >
                        Enviar Calificación
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CalificacionScreen;
