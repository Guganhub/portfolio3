import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link , useLocation} from 'react-router-dom'
import '../styles/NavBar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
const NavBar = () => {

    const [expandNavbar,setExpandNavbar] = useState(false)

    const location = useLocation()

    useEffect(()=>{
        setExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <Button 
        
            onClick={()=>{setExpandNavbar((prev)=>!prev)}}>
            <ReorderIcon>

            </ReorderIcon>
            </Button>
      </div>
      <div className='links'>
        <Link to ='/'>Home</Link>
        <Link to ='/projects'>Projects</Link>
        <Link to ='/experience'>Experience</Link>
        <Link to ='/certifications'>Certifications</Link>
      </div>
    </div>
  )
}

export default NavBar
