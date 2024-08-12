// Definición de los genotipos de guisantes
export const peaGenotypes = {
    'verde-liso': { color: 'VV', texture: 'LL' },
    'amarillo-liso': { color: 'vv', texture: 'LL' },
    'verde-rugoso': { color: 'VV', texture: 'll' },
    'amarillo-rugoso': { color: 'vv', texture: 'll' },
};

class Laboratory {
    constructor() {
        this.generationHistory = [];
        this.currentAllCombinations = [];
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

        this.currentAllCombinations = colorCombinations.flatMap(color => 
            textureCombinations.map(texture => ({ color, texture }))
        );

        // Seleccionar aleatoriamente 4 de las 16 combinaciones
        const selectedCombinations = [];
        for (let i = 0; i < 4; i++) {
            if (this.currentAllCombinations.length > 0) {
                const randomIndex = Math.floor(Math.random() * this.currentAllCombinations.length);
                selectedCombinations.push(this.currentAllCombinations.splice(randomIndex, 1)[0]);
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
        this.generationHistory.push(generation);
        return generation.map(genotype => ({
            genotype: genotype,
            phenotype: this.determinePhenotype(genotype)
        }));
    }

    getGeneration(index) {
        const generation = this.generationHistory[index];
        if (generation) {
            return generation.map(genotype => ({
                genotype: genotype,
                phenotype: this.determinePhenotype(genotype)
            }));
        }
        return null;
    }

    selectForNextGeneration(index, childIndex) {
        const generation = this.generationHistory[index];
        if (generation) {
            const [parent1, parent2, ...children] = generation;
            const selectedChild = children[childIndex];
            this.generationHistory.splice(index, 1);
            return [parent1, parent2, selectedChild];
        }
        return null;
    }

    getAllCombinations() {
        return this.currentAllCombinations.map(genotype => ({
            genotype: genotype,
            phenotype: this.determinePhenotype(genotype)
        }));
    }
}

export default Laboratory;