const container = document.querySelector("#container");
let page = 1;

let timerId;
const throttleFunction = (func, delay) => {
  if (timerId) {
    return;
  }
  timerId = setTimeout(function () {
    func();
    timerId = undefined;
  }, delay);
};

const fetchData = async () => {
  console.log("called");
  const response = await fetch(
    `http://localhost:3000/data?_page=${page++}&_limit=20`
  );
  const data = await response.json();

  data.map((value) => {
    return card(value.id);
  });
};

const card = (id) => {
  const div = document.createElement("div");
  div.classList.add("conta_div");
  div.innerHTML = `<h1>Masai Student ${id}</h1>`;
  container.append(div);
};
fetchData();

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    throttleFunction(fetchData, 2000);
  }
});

// window.addEventListener("scroll", () => {
//   const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 100) {
//     throttleFunction(fetchData, 500);
//   }
// });
