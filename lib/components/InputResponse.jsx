import * as React from "react";
import useData from "../context/data";

import ReactJson from "react-json-view";
const InputResponse = () => {
  const { data } = useData();
  let RJsonProps = {
    displayObjectSize: false,
    name: false,
    quotesOnKeys: false,
    displayDataTypes: false,
  };
  return (
    <div className="responseData">
      <div>
        Status : {data.response.status} {data.response.statusText}
      </div>
      <div>
        <h3 className="title">Response: </h3>
        <ReactJson src={data.response.data || data.response} {...RJsonProps} />
      </div>
      <div>
        <h3 className="title">Headers:</h3>
        <ReactJson src={data.response.headers} {...RJsonProps} />
      </div>
    </div>
  );
};

export default InputResponse;
//refactored
