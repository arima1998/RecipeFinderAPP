import React from 'react'
import './Cuisine.scss'
import {GiFullPizza,GiHotSpices,GiHamburger,GiNoodles} from 'react-icons/gi'

// import { NavLink, Route, Routes } from 'react-router-dom'



function Cuisine() {
  return (
    <div className='cuisine'>
        <div className='cuisine-head'>Bored of eating regulars? Try worldwide cuisines</div>
        <div className='cuisine-box1'>
            {/* <NavLink to={"Catagory"}> */}
                <GiHamburger/>
                <div className='cuisine-box1-label'>American</div>
            {/* </NavLink> */}
        </div>
        <div className='cuisine-box2'>
            {/* <NavLink to={"Catagory"}> */}
                <GiFullPizza/>
                <div className='cuisine-box2-label'>Italian</div>
            {/* </NavLink> */}
        </div>
        <div className='cuisine-box3'>
            {/* <NavLink to={"Catagory"}> */}
                <GiHotSpices/>
                <div className='cuisine-box3-label'>Indian</div>
            {/* </NavLink> */}
        </div>
        <div className='cuisine-box4'>
            {/* <NavLink to={"Catagory"}> */}
                <GiNoodles/>
                <div className='cuisine-box4-label'>Chinese</div>
            {/* </NavLink> */}
        </div>
        <div className='cuisine-gallary'>
            
            
        </div>
    </div>
  )
}

export default Cuisine