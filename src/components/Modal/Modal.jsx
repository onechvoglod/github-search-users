import React, { useContext, Fragment } from "react";
import classes from "./Modal.module.scss";
import { ModalContext } from "../../context/modal/modalContext";

const Modal = () => {
  const { modal, hideModal, confirm } = useContext(ModalContext);

  return (
    <Fragment>
      {modal.show ? (
        <div className={classes.modal}>
          <div className={classes.modal_inner}>
            <span onClick={confirm} className={classes.modal_close}>
              &times;
            </span>
            <h1>Вам уже есть 18?</h1>
            <div>
              <button onClick={hideModal} className="btn btn-primary mr-2">
                Да
              </button>
              <button onClick={confirm} className="btn btn-danger ml-2">
                Нет
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Modal;
