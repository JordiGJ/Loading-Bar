// get elements
const amount = document.querySelector("#amount");
const bar = document.querySelector(".bar");

// variables
let timer;

// functions
(function loadingBar() {
  amount.textContent = 0;
  bar.style.width = 0;
  let percent = 0;
  timer = setInterval(() => {
    if (percent === 100) {
      percent = 100;
    } else {
      percent += 0.5;
      bar.style.width = `${percent}%`;
      amount.textContent = percent.toFixed(0);
    }
  }, 10);
  setTimeout(() => {
    clearInterval(timer);
  }, 2900);
})();
