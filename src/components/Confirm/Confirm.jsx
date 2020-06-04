import React, { useContext } from "react";

import { ModalContext } from "../../context/modal/modalContext";

const Confirm = () => {
  const { showModal, modal } = useContext(ModalContext);

  if (modal.show) return null;

  return (
    <button onClick={showModal} className="btn btn-danger">
      Подтвердите возраст!
    </button>
  );
};

export default Confirm;
