// 3. using element id
const el = document.getElementById("clickButton");
// el.onclick = function () {
//   console.log("hey i am clicked");
// };

function clickme() {
  const id = document.getElementById("username");
  id.style.color = "red";
  id.style.background = "black";
}
el.addEventListener("click", clickme);
