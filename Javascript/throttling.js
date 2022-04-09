      var timerId;
      var throttleFunction =  (func, delay) =>  {
        	// If setTimeout is already scheduled, no need to do anything
        if (timerId) {
          return;
        }
        timerId = setTimeout(function () {
          func();
          timerId = undefined;
        }, delay);
      };

  // var throttling = (fn, delay) => {
  //   let prev = Date.now();
  //   return () => {
  //     let now = Date.now();
  //     if(now - prev > delay){
  //       prev = now;
  //       fn();
  //     }
  //   }
  // }