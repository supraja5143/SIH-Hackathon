import React from 'react'
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'
import p5 from './p5.png'
import p6 from './p6.png'
import p7 from './p7.png'
import p8 from './p8.png'
import p9 from './p9.png'
import p10 from './p10.png'
import p11 from './p11.png'
import p12 from './p12.png'
import p13 from './p13.png'
import p14 from './p14.png'



import "./project.css";


function ProjectCards() {
    
  const Data = [
  {  id : '1',
     src:p1,
     proName:"Project Name",
     desc:'college Name',
  },
  {  id : '2',
     src:p2,
     proName:"Project Name",
     desc:'college Name',
  },
  {  id : '3',
     src:p3,
     proName:"Project Name",
     desc:'college Name',
  },
  {  id : '4',
     src:p4,
     proName:"Project Name",
     desc:'college Name',
  },
  {  id : '5',
     src:p5,
     proName:"Project Name",
     desc:'college Name',
  },
  {  id : '6',
     src:p6,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '7',
     src:p7,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '8',
     src:p8,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '9',
     src:p9,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '10',
     src:p10,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '11',
     src:p11,
     proName:"Project Name",
     desc:'college Name',
  },
  {  id : '12',
     src:p12,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '13',
     src:p13,
     proName:"project Name",
     desc:'college Name',
  },
  {  id : '14',
     src:p14,
     proName:"project Name",
     desc:'college Name',
  },
  ]
  
  return (
      <div className="classContainer">
       <div className='filter' style={{fontFamily:'Poppins'}}>
          <div>
           <p style={{color:'#00665C',fontFamily:'Nirmala UI',fontSize:19,fontWeight:549,}}>Sort by</p>
         
           <form>
      <select style={{width:220,height:38,borderBlockColor:'#00665C',borderRadius:5}}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>

           <p style={{color:'#005BAB',fontFamily:'Nirmala UI',fontSize:20,fontWeight:510}}>Filters</p>
           <p className="labels">Select University/College</p>
           <form>
      <select style={{width:220,height:38,borderBlockColor:'#005BAB',borderRadius:5}} >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
           <p className="labels">Type of Project</p>
           <form>
              <select style={{width:220,height:38,borderBlockColor:'#005BAB',borderRadius:5}} >
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
              </select>
           </form>
           <p className="labels">Department</p>
           <form>
      <select style={{width:220,height:38,borderBlockColor:'#005BAB',borderRadius:5}} >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
    </div>
    <div class="vl"></div>
       </div>
      
     
    <div className="projectContainer">
        {Data.map((item)=>{
          return(
            <div className="projectCard">
          <div className='projectImage'>
            <img src={item.src}
            className="pimg"
            height="99%"
            width="100%"
            // style={{borderRadius:5}}
            />
          </div>
          <div className='projectInfo'>
            <div className='proName'>{item.proName}</div>
            <div className='desc'> {item.desc}</div>
          </div>
        </div>
        
          )
        })}

    </div>
    </div>
  );
}
export default ProjectCards;