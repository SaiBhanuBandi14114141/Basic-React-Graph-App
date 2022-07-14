import React from 'react'
import '../App.css'
import Barchart from './Barchart'
import Radarchart from './Radarchart'
import Linechart from './Linechart'
import { Link, Route, Routes } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h2>Durbin & Traklabs Expenses</h2>
        <h3>
          <Link to='/'> Linechart </Link> <br/>
          <Link to='/barchart'> Barchart </Link> <br/>
          <Link to='/radarchart'> Radarchart </Link> 
        </h3>
        <Routes>
            <Route path="/" element={<Linechart/>}/>
            <Route path="/barchart" element={<Barchart/>}/>
            <Route path="/radarchart" element={<Radarchart/>}/>
        </Routes>
    </div>
  )
}

export default Home