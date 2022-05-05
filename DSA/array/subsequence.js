let str = "sur";
str  = str.split("");

function substring(i, string, newArray,tot=[]){
    if(i === string.length){
        return
    }
    if(newArray.length> 0){
        return tot.push(newArray)
    }
    for(let j=i;j<string.length;j++){
        newArray.push(string[j]);
        substring(j+1,string,newArray);
        newArray.pop()
    }
}

let a = substring(0, str,[])
console.log(a)
