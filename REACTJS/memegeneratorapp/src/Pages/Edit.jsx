import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../Components/Text";

const EditPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("url"));
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <img src={params.get("url")} width="250px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="sucess" onClick={(e) => {}}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
