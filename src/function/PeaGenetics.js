export const peaGenotypes = {
    'verde-liso': { color: 'VV', texture: 'LL' },
    'amarillo-liso': { color: 'vv', texture: 'LL' },
    'verde-rugoso': { color: 'VV', texture: 'll' },
    'amarillo-rugoso': { color: 'vv', texture: 'll' },
};

class Laboratory {
    constructor() {
        this.generationHistory = [];
        
    }

    generateAllCombinations(gene1, gene2) {
        const alleles1 = gene1.split('');
        const alleles2 = gene2.split('');
        return [
            alleles1[0] + alleles2[0],
            alleles1[0] + alleles2[1],
            alleles1[1] + alleles2[0],
            alleles1[1] + alleles2[1]
        ];
    }

    determinePhenotype(genotype) {
        const color = genotype.color.includes('V') ? 'verde' : 'amarillo';
        const texture = genotype.texture.includes('L') ? 'liso' : 'rugoso';
        return `${color}-${texture}`;
    }

    combineGenotypes(genotype1, genotype2) {
        const colorCombinations = this.generateAllCombinations(genotype1.color, genotype2.color);
        const textureCombinations = this.generateAllCombinations(genotype1.texture, genotype2.texture);

        const allCombinations = colorCombinations.flatMap(color => 
            textureCombinations.map(texture => ({ color, texture }))
        );

        // Seleccionar aleatoriamente 4 de las 16 combinaciones
        const selectedCombinations = [];
        for (let i = 0; i < 4; i++) {
            if (allCombinations.length > 0) {
                const randomIndex = Math.floor(Math.random() * allCombinations.length);
                selectedCombinations.push(allCombinations.splice(randomIndex, 1)[0]);
            }
        }

        return selectedCombinations;
    }

    generateNewGeneration(parent1Genotype, parent2Genotype) {
        const childrenGenotypes = this.combineGenotypes(parent1Genotype, parent2Genotype);
        const generation = [
            parent1Genotype,
            parent2Genotype,
            ...childrenGenotypes
        ];
        
        const generationWithPhenotypes = generation.map(genotype => ({
            genotype: genotype,
            phenotype: this.determinePhenotype(genotype)
        }));

        this.generationHistory.push(generationWithPhenotypes);
        return generationWithPhenotypes;
    }

    getAllGenerations() {
        return this.generationHistory;
    }

    getGeneration(index) {
        return this.generationHistory[index] || null;
    }

    getPeaFromGeneration(generationIndex, peaIndex) {
        const generation = this.getGeneration(generationIndex);
        return generation ? generation[peaIndex] : null;
    }

    createNewGenerationFromSelection(parent1, parent2) {
        return this.generateNewGeneration(parent1.genotype, parent2.genotype);
    }

    getAllCombinations(parent1Genotype, parent2Genotype) {
        const colorCombinations = this.generateAllCombinations(parent1Genotype.color, parent2Genotype.color);
        const textureCombinations = this.generateAllCombinations(parent1Genotype.texture, parent2Genotype.texture);

        // Generar todas las combinaciones posibles
        const allCombinations = colorCombinations.flatMap(color => 
            textureCombinations.map(texture => ({
                genotype: { color, texture },
                phenotype: this.determinePhenotype({ color, texture })
            }))
        );

        return allCombinations;  // Devolver todas las combinaciones con fenotipos
    }

    resetGenerations() {
        this.generationHistory = [];
    }
}

export default Laboratory;

