function clock(){
    let c =1;
    return function count(){
        return c++;
    }
}

let c1 = clock();
console.log(c1());
console.log(c1());
console.log(c1());

let c2 = clock();
console.log();

console.log(c2());
console.log(c2());

console.log();
console.log(c1());