import React, { useEffect } from "react";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import p4 from "./p4.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p7 from "./p7.png";
import p8 from "./p8.png";
import p9 from "./p9.png";
import p10 from "./p10.png";
import p11 from "./p11.png";
import p12 from "./p12.png";
import p13 from "./p13.png";
import p14 from "./p14.png";
import {useState, Component} from 'react'
import "./project.css";
import db from "./firebase.js";
import {getFirestore,collection, query, onSnapshot, getDocs} from 'firebase/firestore'
import { doc, setDoc } from "firebase/firestore";
import { orderBy } from "firebase/firestore";

function ProjectCards() {
  var [initialData,setInitialData]=useState([])
  var [Data,setData]=useState([])

  const [value, setValue] = useState([''])
  
//   useEffect(()=>{
//   },[])
  useEffect(()=>{
    getDocs(collection(db,'sih-users')).then(snapshot=>{
      snapshot.forEach(doc=>{
        const data=doc.data()
        initialData.push(data)
        setInitialData(initialData)
        console.log("snapshot-",snapshot)
      })

    })
    .catch(error=>console.log(error))

   }, [])
  const handleSelectChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
    const db = getFirestore()
    const colRef = collection(db, 'projects')
  
    const q = query(colRef, orderBy(value, 'asc'))
   
    onSnapshot(q, (snap) => {
      snap.docs.forEach((doc) => {
        Data.push(doc.data())
        setData(Data)
     
        // books.push({ ...doc.data() })
      })
      console.log("i am is",Data)
    })
  }
  // const Data = [
  //   { id: "1", src: p1, proName: "Project Name", desc: "college Name" },
  //   { id: "2", src: p2, proName: "Project Name", desc: "college Name" },
  //   { id: "3", src: p3, proName: "Project Name", desc: "college Name" },
  //   { id: "4", src: p4, proName: "Project Name", desc: "college Name" },
  //   { id: "5", src: p5, proName: "Project Name", desc: "college Name" },
  //   { id: "6", src: p6, proName: "project Name", desc: "college Name" },
  //   { id: "7", src: p7, proName: "project Name", desc: "college Name" },
  //   { id: "8", src: p8, proName: "project Name", desc: "college Name" },
  //   { id: "9", src: p9, proName: "project Name", desc: "college Name" },
  //   { id: "10", src: p10, proName: "project Name", desc: "college Name" },
  //   { id: "11", src: p11, proName: "Project Name", desc: "college Name" },
  //   { id: "12", src: p12, proName: "project Name", desc: "college Name" },
  //   { id: "13", src: p13, proName: "project Name", desc: "college Name" },
  //   { id: "14", src: p14, proName: "project Name", desc: "college Name" },
  // ];


  return (
    <div className="classContainer">
      <div className="filter" style={{ fontFamily: "Poppins" }}>
        <div>
          <p
            style={{
              color: "#00665C",
              fontFamily: "Nirmala UI",
              fontSize: 19,
              fontWeight: 549,
            }}
          >
            Sort by
          </p>

          <form>
            <select
              style={{
                width: 220,
                height: 38,
                borderBlockColor: "#00665C",
                borderRadius: 5,
              }}
              onChange={handleSelectChange}
            >
              <option selected hidden value="selectone">Select One</option>
              <option value="collegename">College name</option>
              <option value="recentlyadded">Recently Added</option>
            </select>
          </form>

<p
            style={{
              color: "#005BAB",
              fontFamily: "Nirmala UI",
              fontSize: 20,
              fontWeight: 510,
            }}
          >
            Filters
          </p>
          <p className="labels">Select University/College</p>
          <form>
            <select
              style={{
                width: 220,
                height: 38,
                borderBlockColor: "#005BAB",
                borderRadius: 5,
              }}
            >
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </form>
          <p className="labels">Type of Project</p>
          <form>
            <select
              style={{
                width: 220,
                height: 38,
                borderBlockColor: "#005BAB",
                borderRadius: 5,
              }}
            >
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </form>
          <p className="labels">Department</p>
          <form>
            <select
              style={{
                width: 220,
                height: 38,
                borderBlockColor: "#005BAB",
                borderRadius: 5,
              }}
            >
              <option value="Ford">Ford</option>
              <option value="Volvo">Volvo</option>
              <option value="Fiat">Fiat</option>
            </select>
          </form>
        </div>
        <div class="vl"></div>
      </div>
      {/* <div>{JSON.stringify(initialData)}</div> */}
      <div className="projectContainer">
        {initialData.map((item) => {
          return (
            <div className="projectCard">
              <div className="projectImage">
                <img
                  src={item.image}
                  className='cimg'
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="projectInfo">
                <div className="proName" styles={{alignItems: 'center'}}> <b>{item.projectname}</b></div>
                <div className="desc" styles={{alignItems: 'center'}}> <b>{item.collegename}</b></div>

              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="cprojectContainer">
                {Data.map((l,i)=>{
                return(
                    <div className="cprojectCard">
                        <div className='cprojectInfo'>
                                <div className='proName'>{l.collegename}</div>
                                <div className='desc'> {l.projectname}</div>
                        </div>
                  </div>
                
                )
                })}

        </div> */}
      {/* {Data.map((l, i) => {
          return (<div>
            <h1>{l.collegename}</h1>
            <h4>{l.projectname}</h4>
          </div>)
        })} */}
      {/* <div>{books.map((l,i) => {
        console.log("hii")
        return(<div>
          <div>{hi}</div>
        </div>)
      })}
      </div> */}
    </div>
  );
}
export default ProjectCards;