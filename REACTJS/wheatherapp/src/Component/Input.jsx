import React from "react";
import { useWheather } from "../Context/Wheather";

const Input = () => {
  const Wheather = useWheather();

  return (
    <div>
      <input
        className="input"
        placeholder="Search Here"
        value={Wheather.searchCity}
        onChange={(e) => {
          Wheather.setSearchCity(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
