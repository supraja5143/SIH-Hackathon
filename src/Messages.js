import React from 'react'
import srkrlogo from './srkrlogo.png'
import "./messages.css";

function Messages() {
  const Data = [
  {  id : '1',
     proName:"From JNTU, Kakinada",
     desc:'We want research on this project and want to develop it further. We kindly ask you to say your opinion.',
     ref:'Project name',
     accept:'Accept'
  },
  {  id : '2',
  proName:"From JNTU, Kakinada",
  desc:'We want research on this project and want to develop it further. We kindly ask you to say your opinion.',
  ref:'Project name',
  accept:'Accept'
},
{  id : '3',
proName:"From JNTU, Kakinada",
desc:'We want research on this project and want to develop it further. We kindly ask you to say your opinion.',
ref:'Project name',
accept:'Accept'
},
{  id : '4',
proName:"From JNTU, Kakinada",
desc:'We want research on this project and want to develop it further. We kindly ask you to say your opinion.',
ref:'Project name',
accept:'Accept'
},
{  id : '5',
proName:"From JNTU, Kakinada",
desc:'We want research on this project and want to develop it further. We kindly ask you to say your opinion.',
ref:'Project name',
accept:'Accept'
},
{  id : '6',
proName:"From JNTU, Kakinada",
desc:'We want research on this project and want to develop it further. We kindly ask you to say your opinion.',
ref:'Project name',
accept:'Accept'
},
  
  
  ]
  return (
    <div>
       <div style={{display:'flex',flexDirection:'row',}}>
               <div  className='bt1' style={{float:'left',marginLeft:60}}>
                    <img src={srkrlogo} width={110} height={60}  />
                        <p style={{float:'left'}}>Srkr engineering college</p>
          </div>
          </div>
        <p style={{marginLeft:120,fontSize:22,fontWeight:400,float:'left'}}>Messages({Data.length})</p>
    <div className="mContainer">
      
        {Data.map((item)=>{
          return(
            <div className="mCard">
            <div className='minfo'>
            <div className='mName'>{item.proName}</div>
            <div className='mwork'> {item.desc}</div>
            <div className='mwork'>Ref: {item.ref}</div>
            </div>
            <div>
            <div style={{color:'#00665C',marginTop:10,marginRight:30}}>{item.accept}</div>
            
          </div>
        </div>
        
          )
        })}

    </div>
    </div>
  );
}
export default Messages;