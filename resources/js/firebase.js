import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAADZVRC66VRpIZHuBmJBeLuF9FQwTw_Kc",
  authDomain: "tomo-gunjee.firebaseapp.com",
  projectId: "tomo-gunjee",
  storageBucket: "tomo-gunjee.appspot.com",
  messagingSenderId: "939247142540",
  appId: "1:939247142540:web:efa01d65fb436572835da9",
  measurementId: "G-1B8S7SRQV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
