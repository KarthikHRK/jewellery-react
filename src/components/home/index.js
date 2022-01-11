import React from 'react'
import Partner from './partner'
import Recentshow from './recentshows'
import Slider from './slider'
import Timer from './timer'

export default function index() {
    return (
        <div>
           <Slider/>
           
           <Timer/>
           <Recentshow/>
        
           <Partner/>
        </div>
    )
}
