import React, {useState} from "react"
import Home from "../components/home"

export default function Index() {

    const [isVisible, setIsVisible] = useState(false)

  const handleClick = () =>{


    console.log('hghg');
    setIsVisible(!isVisible)
  }

  return (<div>
   <Home/>
    </div>

  )
}

