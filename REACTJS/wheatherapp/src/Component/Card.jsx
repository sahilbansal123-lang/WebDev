import React from "react";
import { useWheather } from "../Context/Wheather";

const Card = () => {
  const Wheather = useWheather();
  return (
    <div className="card">
      <img src={Wheather?.data?.current?.condition?.icon} />
      <h2>{Wheather.data?.current?.temp_c}. C</h2>
      <h5>
        {Wheather.data?.location?.name}, {Wheather.data?.location?.region},{" "}
        {Wheather.data?.location?.country}
      </h5>
    </div>
  );
};

export default Card;
