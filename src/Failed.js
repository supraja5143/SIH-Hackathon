import React from "react";
import srkrlogo from './srkrlogo.png'
import fail from './fail.png'
import "./center.css";

function Failed() {
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
        <p style={{color: "red",textAlign:"center",fontFamily:"Nirmala UI",fontSize:20}}>Sorry,Couldn't Upload it</p>
            
            <p style={{color: "black",textAlign:'center',fontFamily:"Nirmala UI",fontSize:20}}>Similar Project is already available on this platform </p>
            <img src={fail}  width={400} height={300}  />  
        </div>
        </div>
        </div>
    );
}
export default Failed