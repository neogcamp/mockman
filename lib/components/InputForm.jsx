import * as React from "react";
import axios from "axios";
import useData from "../context/data";
//why is headers empty

const InputForm = ({ error }) => {
  const { data, setData } = useData();

  const APICall = async (endpoint, reqType) => {
    const req = async (reqq) => {
      try {
        const response = await axios[reqq](endpoint, {
          body: JSON.parse(data.body),
          headers: data.headers,
        });
        setData({ ...data, response });
      } catch (err) {
        if (err.description == "Mirage: undefined") {
          setData({ ...data, response: err });
        } else {
          setData({ ...data, response: err.response });
        }
      }
    };

    switch (reqType) {
      case "GET":
        req("get");
        break;
      case "POST":
        req("post");
        break;
      case "DELETE":
        req("delete");
        break;
      default:
        break;
    }
  };
  return (
    <div className="inputForm">
      <select
        name="reqType"
        id="reqType"
        defaultValue="GET"
        onChange={(e) => setData({ ...data, reqType: e.target.value })}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        onChange={(e) => setData({ ...data, endpoint: e.target.value })}
        placeholder="Enter your endpoint"
      />
      <button
        onClick={() => APICall(data.endpoint, data.reqType)}
        disabled={error !== null}
      >
        Submit{" "}
      </button>
    </div>
  );
};

export default InputForm;
