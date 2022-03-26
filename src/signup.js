import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import './App.css'
import login from './login.png'

function Signup() {
  const [email, setEmail] = useState("");
  const [psd, setPsd] = useState("");
  const signUp = () => {
    console.log("hii");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email,psd)
      .then((userCredential) => {
        // Signed in
        console.log("user authenticated");
        const user = userCredential.user;
        console.log("user authenticated");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className='main'>
        <div className='image'>
            <img src={login} width={550} height={400} />
        </div>
        <div className='form1'>
            <p style={{color:'#2B5980',fontSize:25,fontFamily:'Nirmala UI'}}>STUDENT SIGN UP</p>
            <div className='f2'>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Email</p>
            <input type="text" name="name"  className='in1' placeholder='Enter your email' style={{letterSpacing:1.5}}  onChange={(e) => setEmail(e.target.value)}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>College ID</p>
            <input type="text" name="name"  className='in1' placeholder='Enter your college ID' style={{letterSpacing:1.5}}  />
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Password</p>
            <input type="password" name="name"  className='in1' placeholder='Enter your password' style={{letterSpacing:1.5}} onChange={(e) => setPsd(e.target.value)}  />
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Confirm Password</p>
            <input type="password" name="name"  className='in1' placeholder='Enter your password' style={{letterSpacing:1.5}}/>
            </div>
            <br />
            <button className='btn2' style={{letterSpacing:1.8}} onClick={signUp}>Sign up</button>
        </div>
    </div>
  )
}

export default Signup
