import React from 'react'
import image1 from "../images/bgs8.jpg"
import image2 from "../images/bgs10.png"
import Fade from 'react-reveal/Fade';
import Title from '../shared/title';
import {FaWhatsappSquare} from 'react-icons/fa'


const Form = () => {
  return (


<div className= '' style={{ width:'100%',    }}  >

<div className='sm:h-96 h-52 opacity-90  bg-no-repeat sm:w-full w-full flex justify-center items-center 'style= {{backgroundImage:`url('${image2}')`} }    >

<Fade left>
<h1 className='sm:text-4xl text-xl font-bold  text-yellow-600 ml-8   '>Register to get free pass
<hr className='w-[100] block mx-auto my-2 border-0 h-1 bg-yellow-600 rounded'/></h1>
</Fade>

</div>


<div className='sm:grid grid-cols-5 grid:cols px-3 gap-6'>  



<div className=' my-10 col-span-3 ' >

<img src={image1} />
<div className='w-[100%] text-justify my-10' >
<h1 className='sm:text-3xl text-xl pb-3 sm:pl-4 pl-2 'style={{color:'#530605'}} ><Title title="Our Branding"/>  

</h1>
<p className='sm:my-2 my-2 mx-6  leading-7 '>We believe in aggressive marketing and don't leave any stone unturned. Our promotions are always led by a celebrity
     ambassador who is the talk of the town and trendy. Our celebrities are fashionable and have a great passion for 
     graceful designs. Our outdoor promotions are always larger than life with enormous hoardings in the most happening
      place of the town. Our media coverage is done by all the premium news channels, FM radio and high traffic social
       media sites. Our print media advertising covers prominent newspapers and fashion magazines. Our personalized 
       invites to 20000s of our previous visitors give us an edge and guarantee us a quality crowd. Top VIPs and High 
       net-worth individuals get invited personally by our board members. Emailer invites to professionals plays as the
        last knot to our promotion campaigns.</p>


</div>
</div>
    
<div className="row col-span-2">

<div className=" col-sm-6 py-sm-5 my-6  ">

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffxzEXDL1Su7Ov0bja6OVYwqi8xXBdQNyYkub41SpLqr5jJA/viewform?embedded=true" width="100%" height="745" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>                       
</div>

<div className="col-sm-6 pt-1">


<div className="c-text shadow-sm" id="cText">

<div className=" col-12">

<div className=" pb-2 flex mx-auto  justify-center gap-5">
<FaWhatsappSquare  className='text-4xl text-green-600 ' />
  <a href="https://wa.me/916366771564" target="new_tab"><h5  style={{color:"#8A0000"}}>Click to get a E-Invite</h5></a>
  </div>
</div>


</div>

</div>

    </div>

    </div>

   
   

</div>

  )
}


export default Form