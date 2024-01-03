import React from 'react'
import {GiKnifeFork} from 'react-icons/gi'
import './NewNav.scss'
import { useNavigate } from 'react-router-dom'
const NewNav = () => {
  const navigate = useNavigate();
  return (
    <div className='nav'>
        <div className='LOGO_items' onClick={ () => {navigate("/")}}>
            <GiKnifeFork/>
            <div className='LL'>Delicious</div>
        </div>
        <div className='nav_items'>
          <a href='#!'>Profile</a>
          <a href='#!'>Sign-Up</a>
        </div>
    </div>
    
  )
}




export default NewNav