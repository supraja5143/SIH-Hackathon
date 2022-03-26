import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from './carousel1.png';
import carousel2 from './carousel2.png';
import carousel3 from './carousel3.png';
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import "./Home.css";
import CountUp from 'react-countup';

function Home() {
  const Data = [
    {  id : '1',
       src:p1,
       proName:"College Name",
       desc:'Project Name',
    },
    {  id : '2',
       src:p2,
       proName:"College Name",
       desc:'Project Name',
    },
    {  id : '3',
       src:p3,
       proName:"College Name",
       desc:'Project Name',
    },
    {  id : '4',
       src:p4,
       proName:"College Name",
       desc:'Project Name',
    },
    
   
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        
        
      };
      return (
          <div >
          <div style={{marginLeft:40,marginRight:40,height:'30%'}}>
        <Slider {...settings} >
          <div>
            <img src={carousel1}
             height="100%"
             width="100%"
            >
                
            </img>
          </div>
          <div>
             <img src={carousel1}
             height="100%"
             width="100%"
             ></img>
          </div>
          <div>
          <img src={carousel1}
          height="60%"
          width="100%"
          ></img>
          </div>
          
        </Slider>
        </div>
        <div style={{paddingTop:25}}>
          <p style={{textAlign:'center',fontWeight:'bold'}}>Heading</p>
        <p style={{textAlign:'center'}}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper dolor orci,<br></br> 
                  nec posuere tellus condimentum in. Aliquam non semper nisl. Sed sit amet tempor purus.<br></br>
                      Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin non sapien augue.<br></br>
            Aliquam eu lacinia justo. Cras dapibus magna turpis, in gravida quam accumsan in. 
       </p>
        </div>
      <div className="hContainer">
      
            {Data.map((item)=>{
              return(
                <div className="hprofileCard">
              <div className='hprofileImage'>
                <img src={item.src} 
                className='himg'
                height="90%"
                width="100%"
                />
              </div>
              <div className='hprofileInfo'>
                <div className='hName'>{item.proName}</div>
                <div className='hwork'> {item.desc}</div>
              </div>
            </div>
            
              )
            })}

    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:60}} >
    <div style={{display:'flex',flexDirection:'column'}}>
    <CountUp  start={0} end={300} delay={0}>
    {({ countUpRef }) => (
      <div>
        <span style={{color:'orange',fontSize:25}} ref={countUpRef} />
      </div>
    )}
  </CountUp>
  <p style={{color:'#00665C',fontFamily:'Poppins',fontSize:20}}>Total no of <br></br> colleges
   and universities</p>
  </div>
  <div style={{display:'flex',flexDirection:'column'}}>
    <CountUp start={0} end={600} delay={0}>
    {({ countUpRef }) => (
      <div>
        <span style={{color:'orange',fontSize:25}} ref={countUpRef} />
      </div>
    )}
  </CountUp>
  <p style={{color:'#00665C',fontFamily:'Poppins',fontSize:20,marginRight:80}}>Total no of <br></br> projects</p>
  </div>
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
    <CountUp start={0} end={400} delay={0}>
    {({ countUpRef }) => (
      <div>
        <span style={{color:'orange',fontSize:25}} ref={countUpRef} />
      </div>
    )}
  </CountUp>
  <p style={{color:'#00665C',fontFamily:'Poppins',fontSize:20}}>Total no of <br></br>
  students involved</p>
  </div>
  </div>
  <div style={{backgroundColor:'#005BAB',color:'white',fontFamily:'Nirmala UI',padding:20,borderRadius:5,marginLeft:30,marginRight:30,marginTop:15,marginBottom:20}}>
        Copyright © 2022. AICTE<br></br>
        Nelson Mandela Marg, Vasant Kunj,<br></br>
        New Delhi -110070<br></br>
    </div>
</div>
      );
    }

export default Home