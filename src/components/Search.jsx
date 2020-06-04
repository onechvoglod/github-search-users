import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

const Input = (props) => {
  const [value, setValue] = useState("");
  const { show, hide } = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") return;
    github.clearUsers();
    if (value.trim()) {
      github.search(value.trim());
      hide();
    } else {
      show("Вы не ввели имя пользователя!");
    }
  };

  return (
    <input
      className="form-control form-control-lg mb-4"
      type="text"
      placeholder="Введите имя пользователя"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyPress={onSubmit}
    />
  );
};

export default Input;
