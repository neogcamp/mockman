import * as React from "react";
import { useState } from "react";
import "./main.css";
import InputForm from "./components/InputForm";
import InputContent from "./components/InputContent";
import InputResponse from "./components/InputResponse";
/* 
The Mockman main exported component would be here
All the other components can be added at lib/components file
Add dependencies as per requirement
Test the component by importing Mockman in src/main.tsx and run yarn dev to see the component in action 
*/

function Mockman({ colorScheme = "standard", endpointsList }) {
  const defaultState = {
    reqType: "GET",
    endpoint: "/api/test-todos",
    body: "{}",
    headers: {},
    response: {},
  };
  const [error, setError] = useState(null);
  const [data, setData] = useState(defaultState);

  return (
    <div className={`mockman`}>
      <div className={`request-wrapper mockman-${colorScheme}`}>
        <InputForm
          data={data}
          setData={setData}
          colorScheme={colorScheme}
          endpointsList={endpointsList}
        />
        <InputContent
          data={data}
          setData={setData}
          error={error}
          setError={setError}
          colorScheme={colorScheme}
        />
      </div>
      <div className={`response-wrapper mockman-${colorScheme}`}>
        <InputResponse data={data} colorScheme={colorScheme} />
      </div>
    </div>
  );
}

export default Mockman;
