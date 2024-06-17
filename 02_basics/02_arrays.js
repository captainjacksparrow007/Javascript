const marvel_heroes=['Thor','iron Man','Spider Man','Captain america'];
const dc_heroes=['superman','flash','batman']

console.log(marvel_heroes+dc_heroes);
console.log(marvel_heroes.concat(dc_heroes));

const all_heroes= [...marvel_heroes, ...dc_heroes];
console.log(all_heroes);

const another_array=[1,2,[2,3,4,5,[3,4,5,6,[4,5,6]]]];
const final=another_array.flat(Infinity);
console.log(final);

console.log(Array.isArray("Jayesh"))
console.log(Array.from("Jayesh"))
console.log(Array.from({name:"Jayesh"}))
console.log(Array.of("Jayesh"))

let score1=300;
let score2=450;
let score3=750;

console.log(Array.of(score1,score2,score3));