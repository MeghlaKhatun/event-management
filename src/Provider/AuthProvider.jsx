import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext=createContext(null)
const auth = getAuth(app);


// main component
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const provider=new GoogleAuthProvider();

    // create user 
    const createUser=(email,password)=>{
        setLoading (true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // create SignIn
    const signIn=(email,password)=>{
        setLoading (true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google login
        const googleLogIn=()=>{
            setLoading (true);
            return signInWithPopup(auth,provider)
        }


    // Sign Out
    const logOut=()=>{
        setLoading (true);
        return signOut(auth)
    }

    // onAuthChange
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading (false);
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        googleLogIn,
        logOut,
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children:PropTypes.node,
}

export default AuthProvider