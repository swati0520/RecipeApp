import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
// import Nav from './Components/Nav'
import Navbar from './Components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleRecipe from './pages/SingleRecipe'

function App() {

  return (
   
   <BrowserRouter>
 <div className='mb-[60px]'>
 <Nav/>
 </div>

<Routes>
<Route path = '/' element = {<Home/>}/>
<Route path = '/Single' element = {<SingleRecipe/>}/>

</Routes>
   
   </BrowserRouter>
  
  )
}

export default App
