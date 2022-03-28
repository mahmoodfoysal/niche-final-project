import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilizationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initilizationAuth;