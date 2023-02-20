import { ReactNode } from "react";

export interface IUserContext {
  user: IUser;
  changeUser: (name: string, url: string) => void;
}

export interface IUser {
  userName: string;
  profilePic: string;
}

export interface UserProviderProps {
  children: ReactNode;
}
