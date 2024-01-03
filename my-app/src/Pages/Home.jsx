import Veggies from '../Components/Veggies'
import Popular from '../Components/Popular'
import Cuisine from '../Components/Cuisine'
import React from 'react'
import './Home.scss'



function Home() {
  return (
    <div>
        <div className="home_container">
          <Popular/>
          <Veggies/>
          <Cuisine/>
        </div>
        
    </div>
  );
}

export default Home