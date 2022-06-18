import React from 'react'
import Navbar from './Navbar'
import Image from './Image'
import Carousel from './Carousel'
import Youtube from './Youtube'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Image/>
      <Carousel />
      <Youtube embedId="rokGy0huYEA"/>
    </>
  )
}

export default Home