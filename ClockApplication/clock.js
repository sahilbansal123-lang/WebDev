function showTime() {
  const currTime = new Date();
  const time = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
  console.log(time);
}
showTime();
