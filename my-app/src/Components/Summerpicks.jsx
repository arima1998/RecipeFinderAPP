import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Summerpicks.scss"
import styled from 'styled-components'

function Summerpicks() {
  const [summerpicks,setSummerpicks] = useState([]);
  useEffect( () => {
    getSummerpicks();

  },[]);
  const getSummerpicks =async ()=> {
    const check = localStorage.getItem("summerpicks");

    if(check){
      setSummerpicks(JSON.parse(check));
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=76ccf87222394f75b6f805a7e01110f1&number=3&tags=drink`);
      const data = await api.json();
      setSummerpicks (data.recipes);
      localStorage.setItem("summerpicks",JSON.stringify(data.recipes));
      console.log(data.recipes);
    }
    
  }
  const x2=summerpicks[0],x1=summerpicks[1],x0=summerpicks[2];
  return (
    <div className="summer__container">
        <div className='summer_left'>
            <p className='summer_left-p'><span>Hot</span> Summer Picks</p>
        </div>
        <div className='summer_right'>
          <div className='box1'>
            <div className='gradient'/>
            <img src={x2?.image} alt={x2?.title}/>
            <p className='box1__name'>{x2?.title}</p>
            <Gradient/>
          </div>
          <div className='box2'>
            <img src={x1?.image} alt={x1?.title}/>
            <p className='box2__name'>{x1?.title}</p>
            <Gradient/>
          </div>
          <div className='box3'>
            <img src={x0?.image} alt={x0?.title}/>
            <p className='box3__name'>{x0?.title}</p>
            <Gradient/>
          </div>
        </div>
    </div>
  )
}
const Gradient=styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3));
    border-radius:2em;
`;
export default Summerpicks