import React from 'react'
import avatar1 from './avatar.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'
import avatar4 from './avatar4.png'
import avatar5 from './avatar5.png'
import avatar6 from './avatar6.png'
import "./Para.css";

function Para() {
  const Data = [
  {  id : '1',
     src:avatar3,
     proName:"Ajay",
     desc:'Ui/Ux',
  },
  {  id : '2',
     src:avatar2,
     proName:"Ganesh",
     desc:'Backend',
  },
  {  id : '3',
     src:avatar4,
     proName:"Shankar",
     desc:'Backend',
  },
  {  id : '4',
     src:avatar1,
     proName:"Bhargavi",
     desc:'Frontend',
  },
  {  id : '5',
     src:avatar5,
     proName:"Jhansi",
     desc:'Frontend',
  },
  {  id : '6',
     src:avatar6,
     proName:"Supraja",
     desc:'Frontend',
  },
  ]
  return (
    <div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',}}>
          <p style={{fontSize:22,fontFamily:'Poppins'}}>What is this platform for?</p>
       <p style={{color:'#A4A4A4',fontSize:20,marginTop:2,fontFamily:'Poppins',lineHeight:1.4}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our idea is to develop a online integrated platform where in all Universities/Colleges<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;provide information of the projects done by their students. For this, Our team planned<br></br> 
an interactive website where all the projects done by the students of various Universities/Colleges<br></br>
are showcased at a common place. We are also adding a facility for plagiarism, so that students<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;can take up unique project works. The information on this platform helps students to gain<br></br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;knowledge on various innovative ideas and this will also help in cross functional research<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;between various Universities/Colleges
        </p>
        </div>
        <p style={{marginLeft:120,fontSize:22,fontWeight:400,float:'left'}}>Developers</p>
    <div className="profileContainer">
      
        {Data.map((item)=>{
          return(
            <div className="profileCard">
          <div className='profileImage'>
            <img src={item.src} 
            height="90%"
            width="80%"
            />
          </div>
          <div className='profileInfo'>
            <div className='Name'>{item.proName}</div>
            <div className='work'> {item.desc}</div>
          </div>
        </div>
        
          )
        })}

    </div>
    </div>
  );
}
export default Para;
