import * as React from "react";
import ReactJson from "react-json-view";
const InputResponse = ({ data }) => {
  let RJsonProps = {
    displayObjectSize: false,
    name: false,
    quotesOnKeys: false,
    displayDataTypes: false,
  };
  return (
    <div className="responseData">
      {data.response == undefined ? (
        <div>Response is undefined.</div>
      ) : (
        <>
          <div>
            Status : {data.response.status} {data.response.statusText}
          </div>
          <div>
            <h3 className="title">Response: </h3>
            <ReactJson
              src={data.response.data || data.response}
              {...RJsonProps}
            />
          </div>
          <div>
            <h3 className="title">Headers:</h3>
            <ReactJson src={data.response.headers} {...RJsonProps} />
          </div>
        </>
      )}
    </div>
  );
};

export default InputResponse;
//refactored
