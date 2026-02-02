import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";

// Login function
export const login = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error(err);
    alert("Login failed");
  }
};

// Logout function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};
