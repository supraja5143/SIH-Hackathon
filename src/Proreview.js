import React from 'react'
import srkrlogo from './srkrlogo.png'

function Proreview() {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{flex:'60%'}}>
            <p>image</p>
            <div style={{borderLeft:' 2px solid grey',height: '150%',position:'absolute',left: '60%'}}></div>
        </div>
        <div style={{flex:'40%',marginLeft:125}}>
        
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

export default Proreview