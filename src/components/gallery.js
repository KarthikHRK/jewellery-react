import React,{useState} from 'react'
import {Bengaluru2021, chikamagalore} from "../data/imagesgallery"
import Title from '../shared/title';
import Fade from 'react-reveal/Fade';
import Coverflow from 'react-coverflow';
import Gallery from 'react-grid-gallery';



export default function GallerySec({images}) {


  console.log(images);

const [data,setData]= useState(images[6])

console.log(data)



 const handleclicks=(e,event)=>{
console.log(event)
  setData(event)

    }




  return (
    <div>

{/* <div className='h-[300px] flex justify-center items-center  'style={{background:'#530605'}} >   

<Fade left>
 <h1 className='text-3xl font-bold  text-yellow-600 ml-8 '>Gallery
<hr className='w-96 block mx-auto my-2 border-0 h-1 bg-yellow-600 rounded'/></h1>
 </Fade>
 </div> */}

  
<Coverflow width="960" height="600"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={false}
    clickable={true}
    box-Shadows= {false}
    active={0}
    media={{
      '@media (max-width: 600px)': {
        width: '100%',
        height: 'auto',
        boxShadwos:'none',
      },
      '@media (min-width: 900px)': {
        width: 'auto',
        height: 'auto'
      }
    }}
    
  >
    {
      images.map((item, i)=>{


        return  (
        <div className=' ' key={i}  onClick={ (e)=> handleclicks(e,item)}  >
          <img  src={item.img} alt='' className='h-44'  style={{
          display: 'block',
          width: '100%',
          objectFit:"cover"
        }} />

<div>

<h1 className='text-center text-white ' style={{background:'#530605'}} >{item.title} </h1>

</div>
        </div>)
      })
    }
  
  </Coverflow>
<div className=""   style={{margin:"auto", width:"95% !important"}}>
<div className="grid">   
<div className="  mt-2 pb-3 pt-3 grid-cols-8 mx-5 item-center "    style={{backgroundColor: "#f1f1f1"}}>

<h1 style={{textAlign:"center",color:'#530605'   }} className='text-3xl font-bold pb-3'  >{data?.title}</h1>
<hr/>

<div className='my-8 static'>
<Gallery margin={5}	rowHeight={300}  className='my-8  static '  images={data?.data}/>

</div>
</div>  

</div>
 </div>
  
</div>


)}










