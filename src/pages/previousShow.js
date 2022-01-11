import React from 'react'
import {useParams} from 'react-router-dom'
import data from '../data/data'
import Slider from '../components/previousShow/slider'
import Text from '../components/previousShow/text'
import Gallery from '../components/previousShow/gallery'




export default function Previousshow() {


    const {id} = useParams()

    const pagedata =  data.find((item)=>{

        return item.id === id
    })
    console.log(pagedata);
    return (
        <div>
           <Slider />
           <br/>
           <Text imageinfo={pagedata.image} info={pagedata.info} name={pagedata.name}/> 
           <br/>
           <Gallery   images={pagedata.images}  name={pagedata.name}     />
           <br/>
        </div>
    )
}
