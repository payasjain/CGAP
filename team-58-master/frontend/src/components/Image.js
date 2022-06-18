import React from 'react'
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"

const Gallery = () => {
  return (
    <div>
      <img src={image1} className="img"/>
      <img src={image2} className="img"/>
      <img src={image3} className="img"/>
      <img src={image4} className="img"/>
      </div>
  )
}
export default Gallery