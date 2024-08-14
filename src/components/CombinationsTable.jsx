import VerdeLiso from '../images/personajes/verde-liso.png';
import VerdeRugoso from '../images/personajes/verde-rugoso.png';
import AmarilloRugoso from '../images/personajes/amarillo-rugoso.png';
import AmarilloLiso from '../images/personajes/amarillo-liso.png';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const peaImages = {
    'verde-liso': VerdeLiso,
    'verde-rugoso': VerdeRugoso,
    'amarillo-rugoso': AmarilloRugoso,
    'amarillo-liso': AmarilloLiso,
};

export default function CombinationsTable({ combinations }) {
    const getImageForCombination = (phenotype) => peaImages[phenotype] || null;


 
    // Asegúrate de que las combinaciones tengan al menos 16 elementos para llenar la tabla 4x4
    const fillEmptyCells = (combinations) => {
        const totalCells = 16;
        return [...combinations, ...Array(totalCells - combinations.length).fill(null)];
    };

    const filledCombinations = fillEmptyCells(combinations.combinations);

    return (
        <div className="w-full overflow-x-auto">

            <div className="flex justify-center items-center space-x-4">
                <motion.img
                    src={getImageForCombination(combinations.parentsSelected.parent1.phenotype)}
                    alt="Parent 1"
                    className="w-16 h-16"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    className="text-2xl font-bold text-gray-700"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    +
                </motion.div>
                <motion.img
                    src={getImageForCombination(combinations.parentsSelected.parent2.phenotype)}
                    alt="Parent 2"
                    className="w-16 h-16"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <table className="w-full table-auto border-collapse">
                <tbody>
                    {/* Crear la tabla 4x4 */}
                    {[...Array(4)].map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {[...Array(4)].map((_, colIndex) => {
                                const combination = filledCombinations[rowIndex * 4 + colIndex];
                                if (!combination) return <td key={colIndex} className="border px-4 py-2"></td>;

                                const phenotype = `${combination.genotype.color.includes('V') ? 'verde' : 'amarillo'}-${combination.genotype.texture.includes('L') ? 'liso' : 'rugoso'}`;
                                const image = getImageForCombination(phenotype);

                                return (
                                    <td key={colIndex} className="border px-4 py-2 text-center">
                                        {image && <img src={image} alt={phenotype} className="w-16 h-16 mx-auto" />}
                                        <p>{phenotype}</p>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
