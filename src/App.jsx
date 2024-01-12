import { useState } from 'react'
import Navbar from '../src/components/Navbar.jsx'
import HeroSec from '../src/components/HeroSection.jsx'
import CardsSec from '../src/components/CardsSection.jsx'
import data from '../src/components/data.js'


function App() {
  const getData = data.map(el => {
  return <CardsSec 
                  img = {el.coverImg} 
                  altimg = {el.altImg} 
                  review = {el.stats.rating}
                  number = {el.stats.reviewCount}
                  location = {el.location}
                  title = {el.title}
                  price = {el.price}
                  />
                })

  return (
    <>
      <Navbar />
      
      <HeroSec />

      <div className="Prova">{getData}</div>
      
    </>
  )
}

export default App
