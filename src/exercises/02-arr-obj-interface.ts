
// Arrays
let abilities: (boolean | string | number )[] = ['Bash', 'Counter', 'Healing', 100];
let abilities2: string[] = ['Bash', 'Counter', 'Healing'];

abilities.push(true);

// Objects and Interfaces

interface Person {
    name: string;
    salary: number;
    abilities: string[];
    city?: string
}

const starring: Person = {
    name: 'Fenner',
    salary: 500,
    abilities: ['Bash', 'Counter', 'Healing']
}
starring.city = 'Bogotá';

console.table( starring );