import React from 'react'

import image1 from "../../images/recentevnts/b11.jpg"
import image2 from "../../images/recentevnts/b12.jpg"
import image3 from "../../images/recentevnts/b13.jpg"
import image4 from "../../images/recentevnts/b15.jpg"
import Title from '../../shared/title';


export default function Recentshow() {
    return (
       <div className=''>


<div className='text-3xl my-10 hover:text-amber-500 text-center'  style={{color:'#530605'}}>
<Title title="Recent events" />
</div>



            <div className='flex justify-center gap-10 container mx-auto' >

          <div  className='text2 shadow-lg rounded-xl overflow-hidden ' >

          <img  src={image1} className=' aspect-auto'   />
          <h1 className='px-2 py-1  bg-white'>Mysuru</h1>
          <p  className='px-2 pb-2   text-xs bg-white'>19, 20 & 21 March 2021 
            <br/>Raddisan Blu Plaza Hotel Mysuru</p>

          </div>
          <div className='text2 shadow-lg rounded-xl overflow-hidden'>
          <img src={image2}  className=' aspect-auto'   />
          <h1 className='px-2 py-1  bg-white'>Hubballi</h1>
          <p  className='px-2 pb-2  text-xs bg-white'>19, 20 & 21 March 2021 
            <br/>Raddisan Blu Plaza Hotel Mysuru</p>

          </div>
        
          <div className='text2 shadow-lg rounded-xl overflow-hidden'>
          <img  src={image1} className=' aspect-auto' />
          <h1 className='px-2 py-1  bg-white'>Shivamogga</h1>
          <p  className='px-2 pb-2   text-xs bg-white'>19, 20 & 21 March 2021 
            <br className='pt-1' />Raddisan Blu Plaza Hotel Mysuru</p>

          </div>
          <div className='text2 shadow-lg rounded-xl overflow-hidden'>
          <img  src={image2}  className=' aspect-auto' />
          <h1 className='px-2 py-1  bg-white' >Bengaluru</h1>
          <p className='px-2 pb-2 text-xs bg-white' >19, 20 & 21 March 2021 
            <br/>Raddisan Blu Plaza Hotel Mysuru</p>

          </div>

          </div>

          <div className=' flex justify-center mt-5' >
          <button  className=' text-white shadow px-8 m-4 py-3 text-xl hover:bg-white  border-2  rounded-tl-2xl rounded-br-2xl hover:rounded-tr-2xl hover:rounded-bl-2xl hover:rounded-tl-none  hover:rounded-br-none  'style={{color:'#DFCA85',  backgroundColor:'#440102' ,}} >All events</button>
        
          </div>
         
        </div>
    )
}
