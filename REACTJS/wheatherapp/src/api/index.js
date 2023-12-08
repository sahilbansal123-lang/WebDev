const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=0d7cb52284ab4716b3860320231103";

export const getWheatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q={city}&aqi=yes`);
  return await response.json();
};
