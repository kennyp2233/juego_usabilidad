import React, { useState } from 'react';
import Laboratory, { peaGenotypes } from '../../function/PeaGenetics';

const PeaGeneticsSimulator = () => {
  const [parent1, setParent1] = useState('');
  const [parent2, setParent2] = useState('');
  const [generation, setGeneration] = useState(null);
  const lab = new Laboratory();

  const handleParentChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const generateOffspring = () => {
    if (parent1 && parent2) {
      const newGeneration = lab.generateNewGeneration(peaGenotypes[parent1], peaGenotypes[parent2]);
      setGeneration(newGeneration);
    }
  };

  const getPeaColor = (phenotype) => {
    return phenotype.includes('verde') ? 'bg-green-500' : 'bg-yellow-500';
  };

  const getPeaTexture = (phenotype) => {
    return phenotype.includes('liso') ? 'rounded-full' : 'rounded-lg';
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simulador de Genética de Guisantes</h1>
      
      <div className="mb-4">
        <label className="mr-2">Guisante Padre 1:</label>
        <select value={parent1} onChange={handleParentChange(setParent1)} className="border p-1">
          <option value="">Selecciona un guisante</option>
          {Object.keys(peaGenotypes).map(pea => (
            <option key={pea} value={pea}>{pea}</option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="mr-2">Guisante Padre 2:</label>
        <select value={parent2} onChange={handleParentChange(setParent2)} className="border p-1">
          <option value="">Selecciona un guisante</option>
          {Object.keys(peaGenotypes).map(pea => (
            <option key={pea} value={pea}>{pea}</option>
          ))}
        </select>
      </div>
      
      <button onClick={generateOffspring} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generar Descendencia
      </button>
      
      {generation && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Nueva Generación:</h2>
          <div className="flex space-x-4">
            {generation.map((pea, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${getPeaColor(pea.phenotype)} ${getPeaTexture(pea.phenotype)} mb-2`}></div>
                <p>{pea.phenotype}</p>
                <p className="text-sm">{`${pea.genotype.color}, ${pea.genotype.texture}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PeaGeneticsSimulator;