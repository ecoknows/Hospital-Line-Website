import React, {useEffect, useState, useContext, createContext} from 'react';
import { auth, firestore } from '../database/Firebase';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    function addUser(item){
        return firestore.collection('Un Verified').doc(item.email).set(item);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        addUser,
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}