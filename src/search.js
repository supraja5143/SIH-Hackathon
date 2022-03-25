import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import db from './firebase.js';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import * as firestore from "firebase/firestore";
import { collection, addDoc, doc} from "firebase/firestore"; 
import "./firebase.js";
function Search(){
    const[clgname,setclgname]=useState("");
    const[projectname,setprojectname]=useState("");
    const [usersData,setUsersData]=useState([{}])
    const getdata=(e)=>{ 
        // e.preventDefault();
        console.log("getdata")
           try {
             const docRef1 = addDoc(collection(db, "users"), {
               collegeName:clgname,
               projectName:projectname
             });
           
             console.log("Document written with ID: ", docRef1.id);
           } catch (e) {
             console.error("Error adding document: ", e);
           }
        //    firestore.getDocs(firestore.collection(db, "users")).then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         setUsersData(usersData.push(doc.data()))
        //         console.log(`${doc.id} => ${doc.data().first}`,usersData);
        //     });
        // });
         }
    return (
        <div>
            <div>
                {/* <h3>SRKR</h3>
                <h2>IoT</h2> */}
            </div>
            <input
        type="text"
        placeholder="your clg name"
        onChange={(e) => {
          setclgname(e.target.value);
        }}
      />
      <br />
      <br />
     
      <br />
      <br />
      <input
        type="text"
        placeholder="enter project name"
        onChange={(e) => {
          setprojectname(e.target.value);
        }}
      />
             <button type="button" onClick={getdata}>add data</button>

             {/* <div>
                 {
                     Object.keys(usersData[0]).map((l,i)=>{
                         return(
                             <div>{l.first}</div>
                         )
                     })
                 }
             </div> */}
        </div>
    )
}
export default Search;