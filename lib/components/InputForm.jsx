import * as React from "react";
import axios from "axios";

const InputForm = ({ data, setData, colorScheme }) => {
  const APICall = async (endpoint, reqType) => {
    const req = async () => {
      let reqOptions = {
        url: endpoint,
        method: reqType,
        headers: data.headers,
        data: JSON.parse(data.body),
      };

      try {
        const response = await axios.request(reqOptions);
        setData({ ...data, response });
        console.log(response, "response");
      } catch (err) {
        console.log(err, "error");
        if (err.description == "Mirage: undefined") {
          setData({ ...data, response: err });
        } else {
          setData({ ...data, response: err.response });
        }
      }
    };
    req();
  };
  return (
    <div className="inputForm">
      <select
        name="reqType"
        id="reqType"
        defaultValue="GET"
        onChange={(e) => setData({ ...data, reqType: e.target.value })}
        className={colorScheme == "dark" && "dark"}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        defaultValue={data.endpoint}
        onChange={(e) => setData({ ...data, endpoint: e.target.value })}
        placeholder="Enter your endpoint"
        className={colorScheme == "dark" && "dark"}
      />
      <button
        onClick={() => APICall(data.endpoint, data.reqType)}
        // disabled={error !== null}
      >
        Submit{" "}
      </button>
    </div>
  );
};

export default InputForm;
