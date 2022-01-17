import React from 'react'
import image2 from "../../images/bgs126.jpg"
import Image1 from "../../images/bgs8.jpg"
import Fade from 'react-reveal/Fade';
import Countdown, {zeroPad} from 'react-countdown';
import Flip from 'react-reveal/Flip';



export default function Comingsoon() {
    return (

       
        <div  className='sm:flex justify-between      '>

<Fade left>      
<div className='shadow  sm:w-[100%] w-[100%]' >

<img src={Image1} className='sm:h-[300px] h-[180px] object-cover '/>

</div>

</Fade> 


<Fade right> 

<div className= 'sm:w-[100%] w-[100%]' >
<div className='sm:h-[300px] h-[150%]'style={{background:'#530605'}} >   



<Countdown

    date= {('2022-02-01T01:02:03')}
 
    renderer={({days,hours,minutes,seconds}) => {
        console.log();
        return <div className='sm:flex justify-center items-center w-full h-full sm:text-5xl text-xl '>    
<div >

<div>
   
<h1 className='text-[25px] text-center mb-4 pl-2 text-white  '>Upcoming jewellery show </h1>


    </div>

<hr className='w-20 block mx-auto my-5 border-0 h-1 bg-white rounded'/>

<div className='flex justify-center gap-5 '>
          
          
  <span className='p-1  rounded-lg  text-center text-[40px] ' style={{background:'#E1CE8A', color:'#530605'   }}  >{days} <br/> <div className='text-[13px] text-center'>   Days </div> </span>
  <span className='p-1  rounded-lg  text-center text-[40px] '  style={{background:'#E1CE8A', color:'#530605'   }} >{zeroPad(hours)}<br/> <div className='text-[13px] text-center'>   Hours </div> </span>
  <span className='p-1  rounded-lg  text-center text-[40px]'  style={{background:'#E1CE8A', color:'#530605'   }} >{minutes}<br/> <div className='text-[13px] text-center'>   Minutes </div> </span>
  <span className='p-1  rounded-lg  text-center text-[40px]'  style={{background:'#E1CE8A', color:'#530605'   }} >{seconds}<br/> <div className='text-[13px] text-center'>   Seconds </div> </span>
        
        </div>
        

<div>
<Flip>
        <p className=' sm:text-[40px]  my-5 text-center text-white' >Bengaluru</p>
        </Flip>
        </div>
        </div>
        
        </div>
        }}/>

        </div>



</div>


</Fade> 


</div>
            
   
    )
}
