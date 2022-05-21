import React, { useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import initializationFirebaseApp from '../Pages/Login/Firebase/Firebase.init';
import { useState } from 'react';




initializationFirebaseApp();
const useFirebase = () => {
   const [user,setUser]  = useState({})
   console.log(user);

   const auth = getAuth();

  
   const loginUser = (email,password) =>{
            
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
   }

   //observe user state

   useEffect( ()=>{
         const unsubscribe = onAuthStateChanged(auth,(user) =>{
            if(user){
               setUser(user)
            }
            else{
               setUser({})
            }
         })

         return () => unsubscribe;
   },[])




  
  return   {
       user,
        loginUser,
     }
   
};

export default useFirebase;