/*
    ===== Código de TypeScript =====
*/
//Funciones 
function add(a: number, b: number): number {
    return a + b;
}

const newAdd = (a: number, b: number): number => {
    return a + b;
}

const multiply = (num: number, other?: number, base: number = 2): number => {
    return num * base;
}

const result = add(9, 10);
const result2 = add(9, 10);
const result3 = multiply(9, 10);

// console.log(result, result2, result3);

// functions with objects param

interface Character {
    name: string;
    lp: number;
    showLP: () => void;
}

const cure = (character: Character, cureX: number): void => {
    character.lp += cureX;
}

const newCharacter: Character = {
    name: 'Fenner',
    lp: 100,
    showLP() {
        console.log(`Points of Life: ${this.lp}`);
        
    },
}

cure(newCharacter, 20);
newCharacter.showLP();