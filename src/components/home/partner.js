import React, {useRef} from 'react'
// import home<img  from '../images/bg14.jpg'
import Slider, {} from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/cswiperimages/p24_files/1254.jpg"
import image2 from "../../images/cswiperimages/p24_files/1354.jpg"
import image3 from "../../images/cswiperimages/p24_files/1234.jpg"
import image4 from "../../images/cswiperimages/p24_files/1254.jpg"
import image5 from "../../images/cswiperimages/p24_files/1354.jpg"
import image6 from "../../images/cswiperimages/p21.jpg"
import image7 from "../../images/cswiperimages/p24_files/1582.jpg"
import Title from '../../shared/title';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'



export default function Partner() {


  const imgdata = [
    image1,
    image2,
    image3, 
      image4,
         image5,
         image6,
         image7,
  ]


  const slider = useRef();
  
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "30px",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
           
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]




        
      };


      console.log({slider});

    return (
        


<div className=' relative'style={{backgroundColor:'#E5E5E5'}} >

  <br/>
<div className='px-8 py-4'>
<div className='text-3xl  ' style={{color:'#530605'}}>
<Title title="Our partners"/>  

</div>
<h1 className='sm:text-sm text-sm  w-full  pt-2 leading-loose'> Our ultra-luxury private residences include villas, ski chalets and spas,
   as well as a 5-star superior hotel.<br/>
    Each one is chosen for its unique character
    and is designed impeccably in the signature Ultima style.<br/>
   Browse our growing portfolio of destinations below.</h1>

</div>

<div className='sm:overflow-hidden item-center ' >

        <Slider {...settings} ref={slider}>
          

          {
imgdata.map((item, i)=>{

  return <div key={i} className='p-1 w-full h-full sm:p-10' > 
          <img className='  shadow transform transition duration-500 hover:scale-110 ' src={item}  />

          </div>
})

          }
          
       

      
          </Slider>

      <div >
<AiOutlineArrowRight onClick={()=>slider?.current?.slickNext()} className='bottom-10 sm:bottom-40 right-8 sm:right-20 absolute bg-pink-200  p-4 text-5xl rounded-r-full transform transition duration-500 hover:scale-110'/>
</div>

<div>
<AiOutlineArrowLeft onClick={()=>slider?.current?.slickPrev()} className='bottom-10 sm:bottom-40 right-20 sm:right-32  absolute bg-pink-200  p-4 text-5xl rounded-l-full transform transition duration-500 hover:scale-110'/>
</div>
   
      </div>
   
      </div>
        )
      }