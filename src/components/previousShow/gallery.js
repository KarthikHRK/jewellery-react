import React from 'react'
import image7 from "../../images/bgs22.jpg"
import image3 from "../../images/nextevents/taj.jpg"
import image4 from "../../images/bgs234.jpg"
import image5 from "../../images/nextevents/mysore.jpg"
import Fade from 'react-reveal/Fade';
import Slider from "react-slick";



export default function Gallery({images,name }) {

console.log(images);





  return (<div className="container mx-auto">

<h1 className='text-2xl mb-1' style={{color:'#530605'}}>{name}</h1>
<br/>

<div className='grid grid-cols-3 gap-2  ' >
{
    images.map((item,i)=>{
        return <div className=""  >
        <img className=' w-full  object-cover' src={item.src}  alt="img" />
        </div>
    })
}


</div>

      
    </div>
  )
}




            
   