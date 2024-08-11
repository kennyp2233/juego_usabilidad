import React from 'react';
import { useSimulator } from '../../context/SimulatorContext';

// LaboratoryScreen.js
const LaboratoryScreen = () => {
    const { peas, setPeas } = useSimulator();
    const [crossResult, setCrossResult] = React.useState([]);
    const [view, setView] = React.useState('phenotype'); // 'phenotype' or 'genotype'

    const generateCross = () => {
        // Aquí iría la lógica para generar el cruce de guisantes
        // Por ahora, simplemente generamos un resultado aleatorio
        const results = Array(4).fill().map(() => Math.random() > 0.5 ? 'green-smooth' : 'yellow-wrinkled');
        setCrossResult(results);
    };

    const toggleView = () => {
        setView(prev => prev === 'phenotype' ? 'genotype' : 'phenotype');
    };

    return (
        <div className="laboratory-screen">
            <h2>Laboratorio de Cruces</h2>
            <div className="parent-peas">
                {peas.map((pea, index) => (
                    <div key={index} className={`pea ${pea}`}></div>
                ))}
            </div>
            <button onClick={generateCross}>Generar Cruce</button>
            <div className="cross-result">
                {crossResult.map((result, index) => (
                    <div key={index} className={`pea ${result}`}></div>
                ))}
            </div>
            <button onClick={toggleView}>
                Cambiar a vista {view === 'phenotype' ? 'Genotipo' : 'Fenotipo'}
            </button>
            {/* Aquí irían más elementos como la tabla de cruces, opciones para nueva generación, etc. */}
        </div>
    );
};

export default LaboratoryScreen;