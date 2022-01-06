import React, { useState, useContext } from "react";

const defaultState = {
  reqType: "GET",
  endpoint: "/",
  body: "{}",
  headers: {},
  response: {},
};

const DataContext = React.createContext(defaultState);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultState);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  return context;
};
export default useData;
