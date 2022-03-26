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
import srkrlogo from './srkrlogo.png'
import {Link} from 'react-router-dom'



import "./Collegeprojects.css";


function Collegeprojects() {
    
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
      <div className="cclassContainer">
       <div className='cfilter' style={{fontFamily:'Poppins'}}>
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
           <p className="clabels">Select University/College</p>
           <form>
      <select style={{width:220,height:38,borderBlockColor:'#005BAB',borderRadius:5}} >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
           <p className="clabels">Type of Project</p>
           <form>
              <select style={{width:220,height:38,borderBlockColor:'#005BAB',borderRadius:5}} >
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
              </select>
           </form>
           <p className="clabels">Department</p>
           <form>
                <select style={{width:220,height:38,borderBlockColor:'#005BAB',borderRadius:5}} >
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                </select>
        </form>
    </div>
    <div className="cvl"></div>
       </div>
      
     
    <div className='ccontainer' >
           <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',}}>
               <div  className='bt1' tyle={{float:'left'}}>
                    <img src={srkrlogo} width={150} height={80}  />
                        <p style={{float:'left'}}>srkr engineering college</p>
          </div>
          <div className="bt" style={{float:'left',display:'flex',justifyContent:'space-around'}}>
               
                <Link to='/messages'>    <button style={{width:140,height:35,borderRadius:30,backgroundColor:'#00665C', border:'none',color:'white'}}>Messages</button></Link>
                    <button style={{width:140,height:35,borderRadius:30,backgroundColor:'#4169E1', border:'none',color:'white'}}>+Add Project</button>
          </div>  
           </div>
          <p>Your students Projects</p>
            <div className="cprojectContainer">
                {Data.map((item)=>{
                return(
                    <div className="cprojectCard">
                        <div className='cprojectImage'>
                                <img src={item.src} 
                                className='cimg'
                                height="100%"
                                width="100%"
                                 
                                />
                        </div>
                        <div className='cprojectInfo'>
                                <div className='proName'>{item.proName}</div>
                                <div className='desc'> {item.desc}</div>
                        </div>
                  </div>
                
                )
                })}

        </div>
    </div>
    </div>
  );
}
export default Collegeprojects;