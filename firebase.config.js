
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-IzjdLraTrNBhM6OB1XreW0mNAQ8R36M",
    authDomain: "equi-sports-6a027.firebaseapp.com",
    projectId: "equi-sports-6a027",
    storageBucket: "equi-sports-6a027.firebasestorage.app",
    messagingSenderId: "671349157711",
    appId: "1:671349157711:web:fe62f61b854ba74fa5df3a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth