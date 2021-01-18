import React, {useEffect, useState, useContext, createContext} from 'react';
import { const_data } from '../data';
import { departments } from '../data/const_data';
import { auth, firestore } from '../database/Firebase';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    function signUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }

    function getDashboard(state){
        if(const_data?.hospitalData?.currentUserId)
            firestore.collection('Verified').doc(const_data.hospitalData.currentUserId).get().then(item=>{
               
                if(item.exists){
                    const data = item.data();

                    if(data?.hospital){
                        const_data.hospitalData.collection = 'Hospitals';
                        const_data.hospitalData.id = data.hospital;
                        getHospital('Hospitals',data.hospital).then( document =>{
                            if(document.exists){
                                const_data.dataOfHospital.data = document.data()
                                state(document.data())
                            }
                        });
                    }
                    if(data?.clinic){
                        const_data.hospitalData.collection = 'Clinics';
                        const_data.hospitalData.id = data.hospital;
                        getHospital('Clinics',item.clinic).then( document =>{
                            if(document.exists){
                                const_data.dataOfHospital.data = document.data()
                                state(document.data())
                            }
                        });
                    }
                }
            })
           
    }

    function getHomepage(state){
        if(const_data?.hospitalData?.currentUserId)
            firestore.collection('Verified').doc(const_data.hospitalData.currentUserId).get().then(item=>{
                
                if(item.exists){
                    const data = item.data();

                    if(data?.hospital){
                        getHospital('Hospitals',data.hospital).then( document =>{
                            if(document.exists){
                                state(document.data())
                            }
                        });
                    }
                    if(data?.clinic){
                        getHospital('Clinics',item.clinic).then( document =>{
                            if(document.exists){
                                state(document.data())
                            }
                        });
                    }
                }
            })
    }
    

    function getHospital(collection,id){
        return firestore.collection(collection).doc(id).get();
    }
    

    function updateHospital(item){
        firestore.collection(const_data.hospitalData.collection).doc(const_data.hospitalData.id).update(item);
    }




    function signIn(email,password){
        return auth.signInWithEmailAndPassword(email, password);
    }
    function signOut(){
        const_data.hospitalData.currentUserId = null;
        return auth.signOut();
    }

    function addUser(item, uid){
        return firestore.collection('Un Verified').doc(uid).set({...item, verification: false})
    }   

    function checkVerification(uid){
        return firestore.collection('Un Verified').doc(uid).get()
    }

    function verifyAccount(item, uid){
        firestore.collection('Un Verified').doc(uid).delete();
        firestore.collection('Verified').doc(uid).set(item);
    }

   async function getDoctorList(department){
        try{
            const data = await firestore
                        .collection(const_data.hospitalData.collection)
                        .doc(const_data.hospitalData.id)
                        .collection(department)
                        .get()
            return data.docs.map(doc => {return doc.data()});
        }catch{

        }
        
    }
    async function searchDoctorList(department, text){
        try{
            const data = await firestore
                        .collection(const_data.hospitalData.collection)
                        .doc(const_data.hospitalData.id)
                        .collection(department)
                        .orderBy("search")
                        .startAt(text)
                        .endAt(text+"\uf8ff")
                        .get()
            return data.docs.map(doc => {
                console.log(doc.data(), ' bleed');
                return doc.data()});
        }catch{

        }
        
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            console.log('test test test');
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        addUser,
        signUp,
        signIn,
        checkVerification,
        verifyAccount,
        signOut,
        getDashboard,
        getHomepage,
        updateHospital,
        getDoctorList,
        searchDoctorList
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}