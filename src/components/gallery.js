import React from 'react'
import {chikamagalore} from "../data/imagesgallery"
import Title from '../shared/title';
import Fade from 'react-reveal/Fade';


export default function Gallery({images}) {


  console.log(images);
  return (
    <div>


<div className='h-[300px] flex justify-center items-center  'style={{background:'#530605'}} >   

<Fade left>
<h1 className='text-3xl font-bold  text-yellow-600 ml-8 '>Gallery
<hr className='w-96 block mx-auto my-2 border-0 h-1 bg-yellow-600 rounded'/></h1>
</Fade>
</div>



<br/>


    <div className='grid grid-cols-3 gap-3  ' >

    
{
    chikamagalore.map((item,i)=>{
        return <div className=""  >
        <img className=' w-full  object-cover' src={item.src}  alt="img" />
        </div>
    })
}


</div>
</div>
  )
}
