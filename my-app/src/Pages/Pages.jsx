import Home from './Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RecipeSearch from '../Components/RecipeSearch'


function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/searched/:search' element={<RecipeSearch/>}/>
      </Routes>
    </div>
  )
}

export default Pages