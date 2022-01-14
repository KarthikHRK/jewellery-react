import React from 'react'
import image1 from "../../images/bg4.jpeg"
import image2 from "../../images/bgs10.png"
import Fade from 'react-reveal/Fade';
import Title from '../../shared/title'


export default function Text({imageinfo,info,name }) {
    return (

<Fade left>
<div className=' grid grid-cols-2 gap-8 container mx-auto ' >

<div className='  overflow-hidden h-[300px]  border-4'>
             <img className='h-[300px] object-cover w-full transform transition duration-500 hover:scale-110' src={imageinfo}   alt="img" />
             </div>


        <div  className=' flex items-center p-2  text-justify  text-black '>
<div>
        <h2 className='text-2xl mb-1' style={{color:'#530605'}}>{name}</h2>
        <hr className=' border-0 h-1 bg-slate-400'/>
        <br/>
        <p className='text-lg '>{info}</p>
        </div>
             </div>
             </div>
       
             </Fade>   
        
    )
}
