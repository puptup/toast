import { ADD_TOAST_EVENT, DELETE_TOAST_EVENT, PositionsKeysType } from "@constants";

const AddToast = (position: PositionsKeysType): string => {
  return ADD_TOAST_EVENT + position;
};

const DeleteToast = (position: PositionsKeysType): string => {
  return DELETE_TOAST_EVENT + position;
};

export default {
  AddToast,
  DeleteToast,
};
