/*
    ===== Código de TypeScript =====
*/
interface Player {
    volume: number;
    second: number;
    track: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 36,
    track: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const { volume, second, track, details } = player;
const { author, year } = details;
// const { volume, second, track, details: {author, year} } = player;

console.log(`Track: ${track}`);
console.log(`Vol: ${volume}`);
console.log(`Second: ${second}`);
console.log(`Author: ${author}`);
console.log(`Year: ${year}`);


const dbz: string[] = ['Gokú', 'Vegeta', 'Trunks'];

const [goku, vegeta, trunks] = dbz;

console.log(goku, vegeta, trunks);
