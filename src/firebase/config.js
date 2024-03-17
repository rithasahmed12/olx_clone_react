import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyX_VztAFrUGQW3vKRZD1WPhSPnC_pB_w",
  authDomain: "olx-clone-2c382.firebaseapp.com",
  projectId: "olx-clone-2c382",
  storageBucket: "olx-clone-2c382.appspot.com",
  messagingSenderId: "211720685307",
  appId: "1:211720685307:web:cf80bc8ec7c8329b1f925e",
  measurementId: "G-1WQVXT9W0Y"
};

const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage();

export default app