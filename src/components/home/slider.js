import React, {useRef} from 'react'
// import home<img  from '../images/bg14.jpg'
// import '../../components/global.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import video1 from "../../images/videos/bengaluru.mp4"
import video2 from "../../images/videos/mysuru.mp4"
import video3 from "../../images/videos/bengaluru2021.mp4"
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'


export default function Home() {

  const slider = useRef();

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 2000,

    };


    const videoData = [
video1, video2, video3
    ]

    return (
        <div className=" h-screen relative bg-fixed bg-cover bg-center pb-4" >
 

     
          <Slider ref={slider} {...settings}>
{

videoData.map((item, k)=>{

    return <div className='h-screen object-cover' key={k}>

<video width="100%" className=' aspect-video'  controls autoPlay muted loop>
<source src={item} type="video/mp4"/>
  <source src={item} type="video/ogg"/>
   Your browser does not support the video tag.
 </video>       

  </div>
})
}
          

 </Slider>
 <div className=' absolute top-[50%]  right-[2%] border-2 p-2 bg-white  opacity-50 rounded-xl text-4xl '>
 <AiFillCaretRight onClick={()=>slider?.current?.slickNext()}/>
 </div>
 <div className=' absolute top-[50%]  left-[2%] border-2 p-2 bg-white  opacity-50 rounded-xl text-4xl '>
<AiFillCaretLeft onClick={()=>slider?.current?.slickPrev()}/>
   </div>

      </div>
        )
      }
      
