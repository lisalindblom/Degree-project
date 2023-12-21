import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/AdminReducers";

export const AdminDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
