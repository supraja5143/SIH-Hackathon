import React from "react";
import srkrlogo from './srkrlogo.png'
import upload2 from './upload2.png'
import "./center.css";

function Success() {
    return (
        <div>
            <div>
            <div style={{display:'flex',flexDirection:'row',}}>
               <div  className='bt1' style={{float:'left',marginLeft:40}}>
                    <img src={srkrlogo} width={110} height={60}  />
                        <p style={{float:'left'}}>Srkr engineering college</p>
          </div>
          </div>
            {/* <p style={{color: "green" ,textAlign:"center",fontSize:20,fontFamily:"poppins",marginTop:10}}>Successfully Uploaded</p> */}
        <div className="center">
        <p style={{color: "green" ,textAlign:"center",fontSize:20,fontFamily:"Nirmala UI",marginTop:10}}>Successfully Uploaded</p>
            <img src={upload2}  width={400} height={300}  />  
        </div>
        </div>
        </div>
    );
}
export default Success