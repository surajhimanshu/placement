let n =4512;
let res = 0;
while(n !== 0){
    let mod = n % 10;
    res = res*10 + mod;
    n = parseInt(n/10);
}
console.log(res)
