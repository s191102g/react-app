import React,{useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from  'firebase/auth'
import {app} from './firebase'
export default function Login() {
   const navigate = useNavigate();
   const auth = getAuth(app)
   const provider = new GoogleAuthProvider();
  
   const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result)=>{
          const name = result.user.displayName;
          const email = result.user.email;
          const profilePic = result.user.photoURL;
  
          localStorage.setItem("name", name)
        
          navigate('/')
      }).catch(error => console.log(error))
  }
 
  return (
    <div style={{  display: 'flex', justifyContent: 'center', paddingTop: '100px',flexDirection: 'column', alignItems: 'center'}}>
         <h1 style={{textAlign: 'center'}}>If you want to use this app. Please login!</h1>
        <button style={{width:'300px'}} type="button" class="btn btn-success" onClick={signInWithGoogle} >Login with Google</button>
    </div>
  )
}
