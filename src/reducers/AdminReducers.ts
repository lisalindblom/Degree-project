export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  GETPOSTBYID,
  GETUSERBYID,
  UPDATEPOST,
  REMOVEPOST,
}
