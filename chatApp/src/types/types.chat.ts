import { IMessage } from "./types.messages";
import { IUser } from "./types.user";

export interface IChat {
  chatId: string;
  createdBy: string;
  date: string;
  content: IMessage[];
  members: string[];
}
