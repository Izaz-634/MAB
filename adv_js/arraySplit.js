const ar = [0,1,2,3,4,5,6,7,8];

const a1 = ar.slice(1,5);
console.log(a1);
console.log(ar);

console.log();

const a2 = ar.splice(1,3);

console.log(a2);
console.log(ar);

console.log();
const a3 = ar.splice(1,3,a2);

console.log(a3);
console.log(ar);

const a_join = a3.join(',');
console.log(a_join);