import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/3.jpg";
import img2 from "../Assets/4.jpg";

function Service() {
  return (
    <div>
      <Carousel infiniteLoop showStatus={false} showArrows={false} showThumbs={false} interval={1000}>
        <div>
            <img src={img1} alt='item1' />
            <p className='legend'>FullStack</p>
        </div>
        <div>
            <img src={img2} alt='item2' />
            <p className='legend'>Peer to peer support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Service
