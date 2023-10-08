import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext=createContext(null)
const auth = getAuth(app);


// main component
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const provider=new GoogleAuthProvider();

    // create user 
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // create SignIn
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // google login
        const googleLogIn=()=>{
            return signInWithPopup(auth,provider)
        }


    // Sign Out
    const logOut=()=>{
        return signOut(auth)
    }

    // onAuthChange
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,
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