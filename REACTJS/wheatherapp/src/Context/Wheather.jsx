import { createContext, useContext, useState } from "react";
import { getWheatherDataForCity } from "../api";

const WheatherContext = createContext(null);

export const useWheather = () => {
  return useContext(WheatherContext);
};

export const WheatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWheatherDataForCity(searchCity);
    setData(response);
  };

  return (
    <WheatherContext.Provider
      value={{ searchCity, data, setSearchCity, fetchData }}
    >
      {props.children}
    </WheatherContext.Provider>
  );
};
