import { initializeApp } from "firebase/app"
import "firebase/auth"
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'
import { set,ref ,onValue} from "firebase/database";

const app = initializeApp({
  apiKey: "AIzaSyCFreGLdnCjJff0A5PFoNaYYSyhg9UxPJc",
  authDomain: "hotel-management-59639.firebaseapp.com",
  projectId: "hotel-management-59639",
  storageBucket: "hotel-management-59639.appspot.com",
  messagingSenderId: "301301647676",
  appId: "1:301301647676:web:a34fe89ebe162ad7df3639",
  measurementId: "G-GM32XQ5303"
})
export const db = getDatabase(app)
export const auth = getAuth(app)
export const dref = ref(db, "categories");
export default app 