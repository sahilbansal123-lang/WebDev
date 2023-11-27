import React from "react";
import Cards from "./cards";
import "./index.css";
import Sdata from "./SData";

const App = () => {
  return (
    <>
      <h1 className="heading-style">List of top 5 Netflix Series in 2023</h1>

      <Cards
        movieName={Sdata[0].sname}
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        link={Sdata[0].links}
      />
      <Cards
        movieName={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        link={Sdata[1].links}
      />
      <Cards
        movieName={Sdata[2].sname}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        link={Sdata[2].links}
      />
      <Cards
        movieName={Sdata[3].sname}
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        link={Sdata[3].links}
      />
      <Cards
        movieName={Sdata[4].sname}
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        link={Sdata[4].links}
      />
    </>
  );
};

export default App;
