let n =245;
let sum = 0;

while( n!==0){
    let r = n %10;
    sum = sum * 10 + r;
    n = parseInt(n/10)
}
console.log(sum)