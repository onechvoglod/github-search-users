import { HIDE_MODAL, CONFIRM, SHOW_MODAL } from "../type";

export const ModalReduser = (state, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      return { show: false, allow: true };
    case CONFIRM:
      return { show: false, allow: false };
    case SHOW_MODAL:
      return { show: true, allow: false };
    default:
      return state;
  }
};
