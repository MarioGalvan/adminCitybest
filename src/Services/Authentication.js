import { signInWithEmailAndPassword } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "./CredentialsFirebase";

export const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        Cookies.set("authenticated", true);
        return true;
    } catch (error) {
        return false;
    }
}

export const Logout = () => {
    Cookies.remove("authenticated");
    auth.signOut();
}