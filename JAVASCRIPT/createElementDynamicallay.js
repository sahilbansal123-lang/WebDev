const button = document.getElementById("clickButton");
const container = document.getElementById("my-container");

button.addEventListener("click", () => {
  const el = document.createElement("h1");
  el.innerText = "Sahil Bansal";
  container.appendChild(el);
});
