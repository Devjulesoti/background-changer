let btn = document.querySelector(".btn");
let text = document.querySelector(".text");
btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6);
  let colors = ["blue", "red", "pink", "orange", "yellow", "green"];
  document.body.style.backgroundColor = colors[randomNumber];
  text.textContent = `Color set to ${colors[randomNumber]}`;
});
