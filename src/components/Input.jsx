import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

const Input = (props) => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") return;
    if (value.trim()) {
      console.log(value);
    } else {
      show("Введите имя пользователя!");
    }
  };

  return (
    <input
      className="form-control form-control-lg mb-4"
      type="text"
      placeholder=".form-control-lg"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyPress={onSubmit}
    />
  );
};

export default Input;
