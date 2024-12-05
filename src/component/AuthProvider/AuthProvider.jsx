import React, { createContext, useEffect, useState } from 'react';

export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [products,setProducts]=useState([])
    const [loader,setLoader]=useState(true)

    // product data 

    useEffect(()=>{
        fetch("/products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    

    const info={products,setProducts ,loader,setLoader}
    return (
        <AuthContext.Provider value={info}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;