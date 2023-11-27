import React from "react";
import Cards from "./cards";
import "./index.css";
import Sdata from "./SData";

const App = () => {
  function ncard(val) {
    return (
      <Cards
        movieName={val.sname}
        imgsrc={val.imgsrc}
        title={val.title}
        link={val.links}
      />
    );
  }

  return (
    <>
      <h1 className="heading-style">List of top 5 Netflix Series in 2023</h1>

      {Sdata.map(ncard)}
    </>
  );
};

export default App;
