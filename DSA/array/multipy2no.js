function mul( a, b)
{
    if (a == 0 || b == 0) {
        return 0;
    }
    if (a == 1) {
        return b;
    }
    if (b == 1) {
        return a;
    }
    if( b < 0){
        return -mul(a , -b)
    }
 
   
 
    return a + mul(a, b - 1);
}

console.log(mul(2,-4))