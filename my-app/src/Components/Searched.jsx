import React from 'react'
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import "./Searched.scss";
import {useNavigate} from 'react-router-dom';

function Searched() {

  const [input,setInput] = useState(""); 
  const navigate = useNavigate();

  const submitHandler = (e)=>{
    e.preventDefault();
    navigate('/searched/'+input);
  };

  return (
    <form  onSubmit={submitHandler} className='search_bar'>
        <div className='div_up_text_input'>
        <FaSearch></FaSearch>
        <input onChange={ (e) => setInput(e.target.value) }
        type="text" placeholder='Hungry?' />
        </div>
    </form>
  )
}



export default Searched