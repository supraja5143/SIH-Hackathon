
import './upload.css'
import login from './upload.png'
import srkrlogo from './srkrlogo.png'
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import db from "./firebase.js";
import {getFirestore,collection, query, onSnapshot, getDocs} from 'firebase/firestore'



function Upload() {
  const[teamname,setteamname]=useState("");
const[projectname,setprojectname]=useState("");
const[teammember,setteammember]=useState("");
  const Files =()=>
  {
    console.log("upload file")
  }
  const Photos =()=>{
    console.log("upload images")
  }
  const uploadhandle =()=>{
    console.log("upload handle");
  }
 
  return (
    <div className='main1'>
               <div>
                    <img src={srkrlogo} width={150} height={80}  />
                    <p style={{fontSize:18,fontFamily:'Microsoft Sans Serif',marginLeft:120,marginTop:-50}}>Srkr engineering college</p>
          </div>
          <div className='main'>
        <div className='form2'>
            <div className='f3'>
            <p style={{color:'#2B5980',fontSize:25,fontFamily:'Nirmala UI'}}>Enter project details</p>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}} onChange={(e) => setprojectname(e.target.value)}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Team Name:</p>
            <input type="text" name="team name"  className='in2' style={{letterSpacing:1.5}} onChange={(e) => setteamname(e.target.value)}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Team Member:</p>
            <input type="password" name="teammember"  className='in2'  style={{letterSpacing:1.5}} onChange={(e) => setteammember(e.target.value)}/>
            <br />
            <br />
            <div style={{display:'flex',flexDirection:'row'}}>
             <p style={{fontFamily:'Microsoft Sans Serif',color:'grey'}}>Photos:</p>
             <button onClick={Photos}className='pic'>Upload pics</button>
            </div>
            <br />
            <div style={{display:'flex',flexDirection:'row'}}>
             <p style={{fontFamily:'Microsoft Sans Serif',color:'grey'}}>Project Files:</p>
             <button onClick={Files} className='file'>Upload files</button>
            </div>
            </div>
            <br />
            <button type="submit" className='btn3' style={{letterSpacing:1.8}} onClick={uploadhandle}>Upload</button>
        </div>
        <div className='image1'>
            <img src={login} width={650} height={500} />
        </div>
        </div>
    </div>
  )
}

export default Upload