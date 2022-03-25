import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import db from './firebase.js';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDocs } from "firebase/firestore";
import * as firestore from "firebase/firestore";
// import { collection, addDoc, doc} from "firebase/firestore"; 
import { collection, query, where, getDocs,addDoc, doc } from "firebase/firestore";
import "./firebase.js";
import { async } from "@firebase/util";
function Search(){
    const[clgname,setclgname]=useState("");
    const[projectname,setprojectname]=useState("");
    var [usersData,setUsersData]=useState([{collegeName: "ganesh", projectName: "hii"}])
   
    useEffect= async()=>{
   
   }
   
    const getdata= async(e)=>{ 
        e.preventDefault();
        setUsersData([{}])
        console.log("getdata")
           try {
             const docRef1 = addDoc(collection(db, "new-users"), {
               collegeName:clgname,
               projectName:projectname
             }).then(async() =>{
                // usersData=[]
                // setUsersData(usersData)
                const q = query(collection(db, "new-users"));
                const querySnapshot = await getDocs(q);
                console.log("querySnapshot",querySnapshot.docs);
                querySnapshot.forEach((doc) => {
                    usersData.push(doc.data())
                    setUsersData(usersData)
                // doc.data() is never undefined for query doc snapshots
                //  console.log(doc.id, " => ", doc.data());
                });
            })
           
             console.log("Document written with ID: ", docRef1.id);
           }
           
           catch (e) {
             console.error("Error adding document: ", e);
           }

          
            console.log("userdata",usersData);
        //    firestore.getDocs(firestore.collection(db, "new-users")).then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         usersData.push(doc.data())
        //         console.log("userdata",usersData)
        //         setUsersData(usersData)
        //         // console.log(`${doc.id} => ${doc.data().first}`,usersData);      
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
      <input
        type="text"
        placeholder="enter project name"
        onChange={(e) => {
          setprojectname(e.target.value);
        }}
      />
             <button type="button" onClick={getdata}>add data</button>
             <div>
                 {usersData.map((l,i)=>{
                     return(
                        <div>
                        {/* <h1>hiii</h1> */}
                        <h1>{l.collegeName}</h1>
                        <h4>{l.projectName}</h4>
                   </div>
                     )
                    
                 })}
             </div>
             
        </div>
    )
    
}
export default Search;