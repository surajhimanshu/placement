
const debouncer = (fn, delay) => {
    let id;
    return () => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => fn(), delay);
    };
  };