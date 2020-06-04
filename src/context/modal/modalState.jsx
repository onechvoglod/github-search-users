import React, { useReducer } from "react";
import { ModalContext } from "./modalContext";
import { ModalReduser } from "./modalReducer";
import { HIDE_MODAL, CONFIRM, SHOW_MODAL } from "../type";

export const ModalState = ({ children }) => {
  const initialState = { show: true, allow: false };
  const [state, dispatch] = useReducer(ModalReduser, initialState);

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL });
  };

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const confirm = () => {
    dispatch({ type: CONFIRM });
  };

  return (
    <ModalContext.Provider
      value={{ hideModal, confirm, showModal, modal: state }}
    >
      {children}
    </ModalContext.Provider>
  );
};
