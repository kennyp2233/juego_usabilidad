import React, { useState } from 'react';
import { useSimulator } from '../../context/SimulatorContext';

const CalificacionScreen = () => {
    const { setCurrentScreen, currentScreen } = useSimulator();
    const [rating, setRating] = useState(0);

    if (currentScreen !== 'rating') return null;

    const handleSubmit = () => {
        console.log('Rating submitted:', rating);
    };

    return (
        <div className="relative p-8 bg-white rounded-lg shadow-2xl overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-center">Califica el Juego</h2>
            <div className="flex flex-col items-center">
                <p className="mb-4 text-lg text-center">
                    Tu opinión es importante para nosotros. Por favor, califica tu experiencia con el juego.
                </p>
                <div className="flex justify-center mb-4" role="radiogroup" aria-label="Calificación del juego">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star}>
                            <input
                                type="radio"
                                name="rating"
                                value={star}
                                className="sr-only"
                                onChange={() => setRating(star)}
                                checked={rating === star}
                                aria-checked={rating === star}
                            />
                            <span
                                className={`cursor-pointer text-2xl ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                role="radio"
                                aria-label={`${star} estrellas`}
                            >
                                ★
                            </span>
                        </label>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={handleSubmit}
                        aria-disabled={rating === 0}
                        disabled={rating === 0}
                    >
                        Enviar Calificación
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CalificacionScreen;
