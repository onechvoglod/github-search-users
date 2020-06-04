import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReduser";
import { HIDE_ALERT, SHOW_ALERT } from "../type";

const AlertState = (props) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const hide = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const show = (text) => {
    dispatch({ type: SHOW_ALERT, payload: { text } });
  };
  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
