import React from 'react'
import './upload.css'
import login from './upload.png'
import srkrlogo from './srkrlogo.png'


function Upload() {
  const Files =()=>
  {
    console.log("upload file")
  }
  const Photos =()=>{
    console.log("upload images")
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
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Project Name:</p>
            <input type="text" name="name"  className='in2'  style={{letterSpacing:1.5}}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Team Name:</p>
            <input type="text" name="name"  className='in2' style={{letterSpacing:1.5}}/>
            <p style={{fontFamily:'Nirmala UI',fontSize:15,letterSpacing:0.8,color:'grey'}}>Team Member:</p>
            <input type="password" name="name"  className='in2'  style={{letterSpacing:1.5}}/>
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
            <button type="submit" className='btn3' style={{letterSpacing:1.8}}>Upload</button>
        </div>
        <div className='image1'>
            <img src={login} width={650} height={500} />
        </div>
        </div>
    </div>
  )
}

export default Upload