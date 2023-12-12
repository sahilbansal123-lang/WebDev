import React from "react";
import { useSearchParams } from "react-router-dom";

const EditPage = () => {
  const [params] = useSearchParams();
  console.log(params.get("url"));
  return (
    <div>
      <div>
        <img src={params.get("url")} width="250px" />
      </div>
      <button></button>
    </div>
  );
};

export default EditPage;
