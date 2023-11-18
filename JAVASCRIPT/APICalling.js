// const button = document.getElementById("search-button");
// const input = document.getElementById("city-input");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0d7cb52284ab4716b3860320231103&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("search-button");
  const input = document.getElementById("city-input");
  let cityName = document.getElementById("city-name");
  const cityTime = document.getElementById("city-time");
  const cityTemp = document.getElementById("city-temp");
  button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  });
});

// http://api.weatherapi.com/v1/current.json?key=0d7cb52284ab4716b3860320231103&q=London&aqi=yes
