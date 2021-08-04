import React, { useState, useEffect } from "react";

const Input = (props) => {
  const { onChange, value, type, name } = props;

  const [state, setState] = useState({
    value: "",
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, value }));
  }, [value]);

  const handleChangeInPut = (e) => {
    if (!onChange) return;
    onChange(e);
  };
  return (
    <input
      style={{ width: "200px", marginTop: "4px" }}
      name={name || ""}
      type={type || ""}
      onChange={handleChangeInPut}
      value={state.value}
    />
  );
};

export default Input;
