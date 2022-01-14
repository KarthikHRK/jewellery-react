import React from 'react'
import Gallery from '../components/gallery'
import {useParams} from 'react-router-dom'

import  {chikamagalore,
    Manglore,
     Mysore,
      shivamogga,
       Mysore2019, 
       tumkur, hubli,
       Bengaluru20,
       Bengaluru2021,
       Mysuru20,
        Ballari2019, Davangere2019, 
        Hubballi2019} from '../data/imagesgallery';

 import imgchik from '../images/nextevents/chikmglore.jpg'
 import imgmng from '../images/nextevents/mng.jpg';
 import imgblry from '../images/nextevents/bellery.jpg';
 import imghbli from '../images/nextevents/hubbali.jpg';
 import imgmys from '../images/nextevents/mysore.jpg';
 import imgshig from '../images/nextevents/shivamogga.jpg';
 import imgdvg from '../images/nextevents/davangere.jpg';
 import imgtmk from '../images/nextevents/tumkur.jpg';
 import imgban from '../images/nextevents/taj.jpg';



export default function Gallerypage() {

const images= [{
      
    id:"t1",
    title:"Chikkamagaluru-2018",
    img:imgchik,
    data:chikamagalore
},

{

  id:"t2",
  title:"Mangaluru-2018",
  img:imgmng,

  data:Manglore
},

{

  id:"t3",
  title:"Mysuru-2018",
  img:imgmys,

  data:Mysore
},

{

  id:"t4",
  title:"Shivamogga-2018",
  img:imgshig,

  data:shivamogga
},

{

  id:"t5",
  title:"Hubballi-2018",
  img:imghbli,

  data:hubli
}, 
{

  id:"t6",
  title:"Tumakuru-2019",
  img:imgtmk,

  data:tumkur
},

{

  id:"t7",
  title:"Mysuru-2019",
  img:imgmys,

  data:Mysore2019
},

{

  id:"t8",
  title:"Ballari-2019",
  img:imgblry,

  data:Ballari2019
},

{

  id:"t9",
  title:"Davanagere-2019",
  img:imgdvg,

  data:Davangere2019
},

{

  id:"t10",
  title:"Hubballi-2019",
  img:imghbli,

  data:Hubballi2019
},
{

  id:"t12",
  title:"Bengaluru-2020",
  img:imgban,

  data:Bengaluru20
},

{

  id:"t11",
  title:"Mysuru-2020",
  img:imgmys,

  data:Mysuru20
},


{

  id:"t13",
  title:"Bengaluru-2021",
  img:imgban,

  data:Bengaluru2021
}

]




    return (
        <div>
            <Gallery  images={images}    />   
        </div>
    )
}
