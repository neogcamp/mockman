import * as React from "react";
import { useState } from "react";
import useData from "../context/data";

const InputContent = ({ error, setError }) => {
  const { data, setData } = useData();
  const [dataHeaders, setDataHeaders] = useState([
    {
      isUsed: true,
      header: "Accept",
      value: "*/*",
    },
    {
      isUsed: false,
      header: "",
      value: "",
    },
  ]);
  React.useEffect(() => {
    setData({
      ...data,
      headers: dataHeaders
        .filter(({ isUsed }) => isUsed === true)
        .map((e) => ({ [e.header]: e.value })),
    });
  }, [dataHeaders]);

  const validateInput = (str) => {
    if (getPotentialJsonError(str) !== false) {
      if (str.length == 0) return setError("Error in JSON format");
      setData({ ...data, body: str });
      setError(null);
    } else {
      setError("Error in JSON format");
    }
  };
  function getPotentialJsonError(str) {
    if (str.length == 0) return true;
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const change = (e, dataItem, itemKey) => {
    const updatedData = { ...dataItem, [itemKey]: e.target.value };
    setDataHeaders(dataHeaders.map((d) => (d === dataItem ? updatedData : d)));
    dataHeaders[dataHeaders.length - 1] === dataItem &&
      setDataHeaders([
        ...dataHeaders,
        {
          isUsed: false,
          header: "",
          value: "",
        },
      ]);
  };
  const toggleChecked = (e, dataItem) => {
    setDataHeaders(
      dataHeaders.map((d) =>
        d === dataItem ? { ...dataItem, isUsed: !dataItem.isUsed } : d
      )
    );
  };

  return (
    <div className="inputContent">
      <h3 className="title">
        Headers: {dataHeaders.filter(({ isUsed }) => isUsed === true).length}{" "}
      </h3>
      <div className="inputHeaders">
        {dataHeaders.map((dataItem) => {
          return (
            <div className="inputHeadersItem">
              <input
                type="checkbox"
                value={dataItem.isUsed}
                defaultChecked={dataItem.isUsed}
                onChange={(e) => toggleChecked(e.target.value, dataItem)}
              />
              <input
                defaultValue={dataItem.header}
                onChange={(e) => change(e, dataItem, "header")}
              />
              <span> : </span>
              <input
                defaultValue={dataItem.value}
                onChange={(e) => change(e, dataItem, "value")}
              />
            </div>
          );
        })}
      </div>
      <h3 className="title">Body:</h3>
      <div>
        <textarea
          defaultValue="{}"
          onChange={(e) => validateInput(e.target.value)}
        />
        <p className="error">{error !== null && error}</p>
      </div>
      <h3 className="title">Auth:</h3>
    </div>
  );
};

export default InputContent;
