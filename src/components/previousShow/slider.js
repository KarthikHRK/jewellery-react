
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/bgs11.jpg"
import image2 from "../../images/bgs12.jpg"
import image3 from "../../images/bgs13.jpg"
import image4 from "../../images/bgs14.jpg"
import image7 from "../../images/bgs22.jpg"
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'
import React, {useRef} from 'react'

export default function Home() {



     const slider = useRef();

     const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
       autoplay: true,
       speed: 2000,
       autoplaySpeed: 2000,
    };

    return (

      
        <div className="h-screen bg-fixed bg-cover bg-center pb-4" >

<div>
        <Slider {...settings}>
          <div >
          <img className='h-screen object-cover'  src={image1} width="100%"  />

          </div>
          <div>
          <img className='h-screen object-cover' src={image2} width="100%"  />

          </div>
          <div>
          <img className='h-screen object-cover' src={image3} width="100%"  />

          </div>
          <div>
          <img className='h-screen object-cover' src={image4} width="100%"  />

          </div>
         
        </Slider>


      <div className=' absolute top-[50%]  right-[2%] border-2 p-2 bg-white  opacity-50 rounded-xl text-4xl '>
        <AiFillCaretRight onClick={()=>slider?.current?.slickNext()}/>
   </div>

   <div className=' absolute top-[50%]  left-[2%] border-2 p-2 bg-white  opacity-50 rounded-xl text-4xl '>
<AiFillCaretLeft onClick={()=>slider?.current?.slickPrev()}/>
   </div>

     </div>
 </div>



        )
      }
      
      