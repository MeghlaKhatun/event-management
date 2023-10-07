import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext=createContext(null)
const auth = getAuth(app);

// main component
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    // create user 
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        user,
        createUser
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