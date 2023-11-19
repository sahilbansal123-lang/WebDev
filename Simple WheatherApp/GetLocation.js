const button = document.getElementById("get-location");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0d7cb52284ab4716b3860320231103&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log(result);
}

function failedLocation() {
  console.log("there is some issue");
}
button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedLocation);
});
