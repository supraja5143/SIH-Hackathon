import React from 'react'
import avatar1 from './avatar.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'
import avatar4 from './avatar4.png'
import avatar5 from './avatar5.png'
import avatar6 from './avatar6.png'
import Select from "react-select";
import "./project.css";
const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "red" : "green",
        color: "#FFF",
        cursor: isDisabled ? "not-allowed" : "default"
      };
    }
  };
  const items = [
    { label: "orange", value: "orange" },
    { label: "apple", value: "apple", isDisabled: true }
  ];

function ProjectCards() {
    // const [myCar, setMyCar] = useState("Volvo");
  
    // const handleChange = (event) => {
    //   setMyCar(event.target.value)
  const Data = [
  {  id : '1',
     src:avatar1,
     proName:"Ajay",
     desc:'Ui/Ux',
  },
  {  id : '2',
     src:avatar2,
     proName:"Ganesh",
     desc:'Backend',
  },
  {  id : '3',
     src:avatar3,
     proName:"SivaShankar",
     desc:'Backend',
  },
  {  id : '4',
     src:avatar4,
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
  {  id : '1',
     src:avatar1,
     proName:"Ajay",
     desc:'Ui/Ux',
  },
  {  id : '2',
     src:avatar2,
     proName:"Ganesh",
     desc:'Backend',
  },
  {  id : '3',
     src:avatar3,
     proName:"SivaShankar",
     desc:'Backend',
  },
  {  id : '4',
     src:avatar4,
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
  const Data1 = [
    {
        id:'1',
        value:'Ford',
        value:'volvo',
    },
    {
        id:'2',
        value:'Volvo',
    },
    {
        id:'3',
        value:'Fiat',
    },
  ];
  return (
      <div className="classContainer">
       <div >
           <p>Sort by</p>
           {/* value={myCar} onChange={handleChange} */}
           <form>
      <select >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>

           <p>Filters</p>
           <p>Select University/College</p>
           <form>
      <select >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
           <p>Type of Project</p>
           
           <p>Department</p>
           <form>
      <select >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
       </div>
      <div>
      {Data1.map((item)=>{
          return(
            <form>
      <select >
        <option value="Ford">{item.value}</option>
        <option value="Volvo">{item.value}</option>
        <option value="Fiat">{item.value}</option>
      </select>
    </form>
        
          )
        })}
      </div>
      
    <div className="projectContainer">
        {Data.map((item)=>{
          return(
            <div className="courseCard">
          <div className='projectImage'>
            <img src={item.src} 
            height="85%"
            width="60%"
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