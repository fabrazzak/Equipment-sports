import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../../firebase.config';

export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [user, setUser] = useState([]);

    // product data 

    useEffect(()=>{
        fetch("https://equi-sports-server-eight.vercel.app/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login user 

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //   login with gmail 
    const loginWithGoogle = () => {
        setLoading(true) 
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    } 





    // signout user 

    const singOut = () => {
        return signOut(auth)

    }


    //  update password 

    const updatePass = (email) => {

        return sendPasswordResetEmail(auth, email)

    }



    // update profile  

    const profileUpdate = (profileInfo) => {
        return updateProfile(user, profileInfo)

    }

    //  Get the currently signed -in use


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()


        }


    }, [])

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme; // Apply the theme to the body element
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    const info = { products, setProducts, toggleTheme, theme,  createUser, loginUser, loginWithGoogle, user, singOut, loading, updatePass, profileUpdate }

    return (
        <AuthContext.Provider value={info}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;