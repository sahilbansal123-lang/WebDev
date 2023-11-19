function showTime() {
  const currTime = new Date();
  const time = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}
let interval = setInterval(showTime, 1000);

const button = document.getElementById("stop");
button.addEventListener("click", () => {
  clearInterval(interval);
});

// setTimeout(() => console.log("hi"), 2000); // SET timeout only run once

// setInterval(() => console.log("hi"), 2000); // Set interval runs in interval runs after every limit that is set by the user
