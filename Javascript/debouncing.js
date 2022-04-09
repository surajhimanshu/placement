
const debouncer = (fn, delay) => {
    let id;
    return () => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => fn(), delay);
    };
  };

  // var  timerId;
  // var  debounceFunction  =  function (func, delay) {
  //   // Cancels the setTimeout method execution
  //   clearTimeout(timerId)
  
  //   // Executes the func after delay time.
  //   timerId  =  setTimeout(func, delay)
  // }