import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtdg4U3Qx02eDsAu0s5sqDOYguZB0LbRI",
  authDomain: "olx-clone-react-12dc7.firebaseapp.com",
  projectId: "olx-clone-react-12dc7",
  storageBucket: "olx-clone-react-12dc7.appspot.com",
  messagingSenderId: "171826164653",
  appId: "1:171826164653:web:f04d0b329d00114f3ba724"
};

const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage();

export default app