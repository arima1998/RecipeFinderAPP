import "./Veggies.scss";
import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {Splide,SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

function Veggies() {
  const [veggies,setVeggies] = useState([]);


  useEffect( () => {
    getVeggies();

  },[]);
  const getVeggies =async ()=> {
    const check = localStorage.getItem("dessert");
    if(check){
      setVeggies(JSON.parse(check));
    }
    else{
      
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=76ccf87222394f75b6f805a7e01110f1&number=10&tags=dessert`);
      const data = await api.json();
      setVeggies (data.recipes);
      console.log(data);
      localStorage.setItem("dessert",JSON.stringify(data.recipes));

    }
  }
  return (
    <div>
    <div className='Wrapper'>
      <h3 className="veggie_text">Dessert Picks</h3>
      <Splide options={{
        perPage: 3,
        arrows:false,
        pagination:false,
        drag: 'free',
        gap: '1rem'
      }}>
      {veggies.map((recipe)=>{
        
        return(
          <SplideSlide key={recipe.id}>
        <div className='card'>
          <p className='card_pp'>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title}/>
          <Gradient/>
       </div>
        </SplideSlide>
        );
      })}
      </Splide>
    </div>
  </div>
  )
}

const Gradient=styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;

export default Veggies