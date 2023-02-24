import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore/lite";
import { IChat } from "../types/types.chat";
import { IUser } from "../types/types.user";

const firebaseConfig = {
  apiKey: "AIzaSyACSj4EY6lXVDu_wfoB9WZwME0oYP6mUts",
  authDomain: "odinchatapp.firebaseapp.com",
  projectId: "odinchatapp",
  storageBucket: "odinchatapp.appspot.com",
  messagingSenderId: "981724907534",
  appId: "1:981724907534:web:673668e65b070a4883145f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

// functions
export const SignIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
};

export const SignOut = () => {
  signOut(getAuth());
};

export const isUserSignedIn = () => {
  return !!getAuth().currentUser;
};

export const getProfilePicUrl = () => {
  return getAuth().currentUser?.photoURL || "/images/profile_placeholder.png";
};

export const getUserName = () => {
  let user = getAuth().currentUser?.displayName;
  if (typeof user == "string") {
    return user;
  }
  return "";
};

export const storeUserData = async (user: IUser) => {
  try {
    console.log("saved");
    await setDoc(doc(db, "users", user.email), {
      uid: user.uid,
      email: user.email,
      name: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(error);
  }
};

export const isUserDataAlreadySaved = async (email: string) => {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnap = await getDocs(q);

  return querySnap.empty;
};

export const searchForAUser = async (name: string): Promise<IUser[]> => {
  let users: IUser[] = [{ email: "", profilePic: "", uid: "", userName: "" }];
  const q = query(collection(db, "users"), where("name", ">=", name));
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    if (doc.data().uid !== getAuth().currentUser?.uid) {
      if (doc.data().name.includes(name)) {
        users = [
          ...users,
          {
            uid: doc.data().uid,
            email: doc.data().email,
            userName: doc.data().name,
            profilePic: doc.data().profilePic,
          },
        ];
      }
    }
  });
  return users;
};

export const createNewChat = async (createdBy: IUser, sentToId: string) => {
  try {
    console.log("chat saved");
    await setDoc(doc(db, "chats", uuidv4()), {
      chatId: uuidv4(),
      createdBy: createdBy.uid,
      members: [createdBy.uid, sentToId],
      content: [],
      date: Timestamp.now(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserChats = async (userId: string): Promise<IChat[]> => {
  let chats: IChat[] = [
    {
      chatId: "",
      createdBy: "",
      members: [{ email: "", profilePic: "", uid: "", userName: "" }],
      sentTo: "",
    },
  ];
  let counter = 0;
  const q = query(
    collection(db, "chats"),
    where("members", "array-contains", userId)
  );
  const querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    if (counter === 0) {
      chats[0] = {
        chatId: doc.data().chatId,
        createdBy: doc.data().createdBy,
        members: doc.data().members,
        sentTo: doc.data().sentTo,
      };
      counter++;
    } else {
      chats = [
        ...chats,
        {
          chatId: doc.data().chatId,
          createdBy: doc.data().createdBy,
          members: doc.data().members,
          sentTo: doc.data().sentTo,
        },
      ];
    }
  });
  return chats;
};
