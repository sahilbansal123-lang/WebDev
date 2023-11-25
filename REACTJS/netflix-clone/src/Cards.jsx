import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img src="" alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">A Netflix original Series</span>
          <h3 className="card__title">DARK</h3>
          <a href="" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
