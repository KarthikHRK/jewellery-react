import React from 'react'
import {chikamagalore} from "../data/imagesgallery"



export default function Gallery() {
  return (
    <div className='grid grid-cols-3 gap-2  ' >
{
    chikamagalore.map((item,i)=>{
        return <div className=""  >
        <img className=' w-full  object-cover' src={item.src}  alt="img" />
        </div>
    })
}


</div>
  )
}
