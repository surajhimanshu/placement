let arr = [0,1,2,2,8,3,3,3,4,4,4,4,6,9,10,11,13];
// 1-4,6,9-11
const consc = (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    let res = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] === arr[i+1] || arr[i] +1 === arr[i+1] ){
            if(min === Number.MAX_SAFE_INTEGER){
                min = arr[i];
            }
            max = arr[i+1];
        }else{
            if(min !== Number.MAX_SAFE_INTEGER){
                res.push(`${min}-${max}`)
            }else{
                res.push(arr[i])
            }
            min = Number.MAX_SAFE_INTEGER;
            max = 0;
        }
    }
    console.log(res)
}


consc(arr)