import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import {useNavigate} from 'react-router-dom'
import ProjectCards from './Projectcards.js'
import "./firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './App.css'
import login from './login.png'
import { Link } from 'react-router-dom'

function Login() {

  const [err, seterr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn=()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       navigate('/Collegeprojects');
        // ...
      })
      .catch((error) => {
        // console.log(error)
        seterr({ err: error.code })
        //const errorMessage = error.message;  
        console.log(err.length)
      });
  }
  return (
    <div className='main'>
        <div className='image'>
            <img src={login} width={550} height={400} />
        </div>
        <div className='form'>
            <p style={{color:'#2B5980',fontSize:25,fontFamily:'Nirmala UI'}}>LOGIN</p>
            {err.length>0 && <p>user not logged in</p>}
            <div className='f1'>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>email</p>
            <input type="text" name="name"  className='in1' placeholder='Enter your college ID' style={{letterSpacing:1.5}}  onChange={(e) => setEmail(e.target.value)}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Password</p>
            <input type="password" name="name"  className='in1' placeholder='Enter your password' style={{letterSpacing:1.5}}   onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br />
            <br />
            <button className='btn' style={{letterSpacing:1.8}} onClick={signIn}>Login</button>
            <Link  to='/signup' className='signup'>Sign up</Link>
        </div>
    </div>
  )
}

export default Login