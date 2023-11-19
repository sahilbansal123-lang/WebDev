function showTime() {
  const currTime = new Date();
  const time = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}
setInterval(showTime, 1000);

// setTimeout(() => console.log("hi"), 2000); // SET timeout only run once

// setInterval(() => console.log("hi"), 2000); // Set interval runs in interval runs after every limit that is set by the user
