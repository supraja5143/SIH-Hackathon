import React from 'react'
import srkrlogo from './srkrlogo.png'
import p1 from './p1.png'



function Removeproject() {
  
  return (
    <div style={{display:'flex',flexDirection:'row',paddingTop:30}}>
        <div style={{flex:'60%'}}>
        <img src={p1} width={550} height={400}
        style=
        {{
          display: 'block',
          marginLeft: 'auto',
          marginRight:'auto',
          marginTop:50
          
        }}  />

     </div>
<div style={{borderLeft:' 2px solid grey',height: '150%',position:'absolute',left: '60%'}}></div>
        <div style={{flex:'40%',marginLeft:125}}>
        <div className="bt" style={{float:'right',display:'flex'}}>
               
              
               <button style={{width:140,height:35,borderRadius:30,backgroundColor:'#D11A2A', border:'none',color:'white'}}>Removeproject</button>
     </div> 
          <p style={{textAlign:'center',color:'#005BAB',fontFamily:'Nirmala UI',fontSize:25}}>Sensor Based Car</p>
          <img src={srkrlogo} width={150} height={80} style=
          {{
            display: 'block',
            marginLeft: 'auto',
            marginRight:'auto'
            
          }}  />
          <p style={{textAlign:'center'}}>By SRKR Engineering College</p>
          <div style={{color:'grey'}}>
       
          <p>Team Name :</p>
          <p>No of students :</p>
          <p>Team Member 1 :A</p>
          <p>Team Member 2:B</p>
          <p>Team Member 3:C</p>
          <p>Team Member 4:D</p>
          <p>Team Member 5:E</p>
          <p>Description:</p>
          <p>Project file:</p>
          <p>Send a message to this College/University : </p>
          <textarea
          style={{width:'90%'}}
          rows={5}
          cols={5}
        />
        </div>
        </div>
       
    </div>
  )
}

export default Removeproject