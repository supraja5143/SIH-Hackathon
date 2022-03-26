import React from "react";
import srkrlogo from './srkrlogo.png'
import upload2 from './upload2.png'

function Success() {
    return (
        <div>
            <div>
                <img src={srkrlogo} width={50} height={50} />
                <p style={{color:"black",marginTop:-40,marginLeft:60,fontSize:20,fontFamily:"poppins"}}>SrkR Engineering College</p>
            <br></br>
            <p style={{color: "green" ,textAlign:"center",fontSize:20,fontFamily:"poppins"}}>Successfully Uploaded</p>
        <div>
            <img src={upload2} class="center" width={400} height={400}  />  
        </div>
        </div>
        </div>
    );
}
export default Success