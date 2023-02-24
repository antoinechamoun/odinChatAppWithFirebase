import { ReactNode } from "react";

export interface IUserContext {
  showUserSearchModal: boolean;
  usersFound: IUser[] | undefined;
  setShowUserSearchModal: (isShow: boolean) => void;
  searchUser: string;
  setSearchUser: (name: string) => void;
  user: IUser;
}

export interface IUser {
  uid: string;
  email: string;
  userName: string;
  profilePic: string;
}

export interface UserProviderProps {
  children: ReactNode;
}
