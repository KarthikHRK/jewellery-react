import React from 'react'
import  {Link}  from 'react-router-dom'
import Logo1 from '../../images/123456.png'

const Footer = () => {
    return (
      <div className="" style={{background:'#530605'}} >
        <div className="px-4 container mx-auto p-6">
      <div className="grid gap-6 row-gap-6 mb-6 sm:grid-cols-4 lg:grid-cols-9">
        <div className="sm:col-span-3">
         
          <div className="space-y-2 ">

            <h1 className='text-base font-bold text-white'>THE JEWELLERY SHOW</h1>
            <p className="text-[16px] pt-3 text-white  text-justify pr-12 ">
            The practical platform for display & sale of spectacular Gold, Diamond, Platinum, Gems, Pearls & Silver Jewellery.  </p>
           
          </div>

          <div className='flex justify-start'>
          <h1 className='text-lg text-white pt-2'>Organized by :</h1>
          <img src={Logo1} className='h-16 w-28 ml-8 ' alt="jewellery"   />
          </div>
        </div>

        <div className="space-y-2 text-lg sm:col-span-2 ml-8">
          <p className="text-base font-bold tracking-wide text-white">
          QUICK LINKS
          </p>
        
          <div className="">
            
            <Link to="/previous-show"
              className="transition-colors duration-300 text-white"
            >

             <h1 className='pt-2 text-[16px] hover:text-orange-400'>Previous shows</h1> 
             

             </Link>

             <Link to="/upcoming-show ">
          
             <p className='pt-2 text-[16px] text-white hover:text-orange-400'>Upcoming shows</p> 
</Link>

<Link to="/Gallery">
             <h2 className='pt-2  text-[16px] text-white hover:text-orange-400'>Gallery</h2> 
              
             </Link>
          </div>
          </div>

          <div className="space-y-2 text-lg sm:col-4 lg:col-span-2  ">
          <p className="text-base font-bold tracking-wide text-white">
            CONTACT INFO
          </p>
        
         
          <div className=" flex flex-col text-[16px] text-white">
            
           
            <p>Jagadeesh</p>  
            <Link  to="tel:+7349479797" > 7349479797 </Link>
            <p>Bengaluru Karnataka</p> 

              <Link
              to="mailto:someone@example.com">  info@thejewelleryshow.in </Link>
          </div>
        </div>
          
        
        <div className='sm:col-span-2'   > 
          <div className="text-base font-bold  tracking-wide text-white ">
          FOLLOW US ON </div>
          
    <div className='flex justify-start gap-10'>

         <div className='mt-4' >
            <Link to="/"
              className=" text-white transition-colors  hover:text-orange-400"
            ><span >
            <svg viewBox="0 0 25 25" fill="currentColor" className="h-6">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg></span>
            </Link>
            </div>


             <div className='mt-4' >
            <Link to="/"
              className=" text-white transition-colors  hover:text-orange-400"
            ><span > <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4" />
            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
          </svg></span>
            </Link>
            </div>



            <div className='mt-5' >
            <Link to="/"
              className=" text-white transition-colors  hover:text-orange-400"
            ><span >  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 ">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg></span>
            </Link>
            </div>
            
          
          </div>
        
      
          </div>
      

        </div>

      <div className="flex justify-center flex-col-reverse pt-3 pb-3 border-t lg:flex-row" style={{background:'#490303'}}>
        <p className="text-sm text-white text-center mx-auhref ">
          © Copyright 2021. All rights reserved. Designed By <span className=""><a to="https://1990minds.com/">1990Minds</a></span>
        </p>
        

      </div>
    </div>
    </div>
    )
}

export default Footer