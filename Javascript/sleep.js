

    const sleep = (timer) => {
        return new Promise((resolve, reject) => {
            if(typeof timer !== "number"){
                reject(timer)
            }else{
                setTimeout(() => {
                    resolve(timer)
                }, timer)
            }
        })
    }
    sleep(1000)
        .then((res) =>  console.log(`slept for ${res} milli seconds`))
        .catch(e => console.log(`${e} not a number`))