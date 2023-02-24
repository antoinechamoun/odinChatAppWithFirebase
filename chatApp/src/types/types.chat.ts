import { IUser } from "./types.user";

export interface IChat {
  chatId: string;
  createdBy: string;
  sentTo: string;
  members: IUser[];
}
