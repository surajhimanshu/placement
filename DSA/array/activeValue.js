function vision(num){
    num = String(num).split("");
    let ob = [];
    let ob1 = {};
    for(let i=0;i<num.length;i++){
        let a = summ(num,i,Number(num[i]));
        ob.push([num[i] , a]);
        ob1[num[i]] = a;
    }
    let min = 999999;
    let flag = false;
    for(let i=0;i<ob.length;i++){
         min = Math.min(min, ob[i][1]); 
    }
    console.log(min)
    for(let i=0;i<ob.length;i++){
        if(ob[i][0] == 1 && ob[i][1] === min){
            flag = true;
            break
        }
    }

    return flag
}

function summ(arr,i,endIndex){
    let sum = 0;
    let leftIndex = i-1;
    for(let j = 0;j<endIndex;j++){
        if(leftIndex < 0) break;
        sum += Number(arr[leftIndex--])
    }
    let rightindex = i+1;
    for(let j = 0;j<endIndex;j++){
        if(rightindex > arr.length -1 ) break;
        sum += Number(arr[rightindex++])
    }
    return sum
}


console.log(vision(34315))