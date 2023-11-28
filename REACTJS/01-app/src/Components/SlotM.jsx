import React from "react";

const SlotM = () => {
  let x = "😄";
  let y = "😄";
  let z = "👍";

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is not Matching</h1>
          <hr />
        </div>
      </>
    );
  }
};

export default SlotM;
