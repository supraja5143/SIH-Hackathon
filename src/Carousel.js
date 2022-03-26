import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carousel1 from './carousel1.png'
import carousel2 from './carousel2.png'
import carousel3 from './carousel3.png'

function carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        
        
      };
      return (
          <div style={{marginLeft:40,marginRight:40,height:'30%'}}>
        <Slider {...settings} >
          <div>
            <img src={carousel1}
             height="100%"
             width="100%"
            >
                
            </img>
          </div>
          <div style={{height:"80%",width:"100%"}}>
             <img src={carousel1}
             
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
      );
    }

export default carousel