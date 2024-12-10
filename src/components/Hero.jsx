import React from 'react'
import hero from '../img/hero.png'

function Hero() {
  return (
    <>
      {/* <!--hero start--> */}
    <div className="row hero">
        <div className="col-sm-6 head">
            <h1>PLANTS</h1>
            <h2> Bird of Paradise Plant</h2>
            <p className="deco">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris
                efficitur elementum.</p>
            <button className="addtocart">ADD TO CART</button>
            </div>
        <div className="col-sm-6 myclass "><img src={hero} className="img-fluid"></img></div>
    </div>
 
    </>
    // <!--hero end-->
    
  )
}

export default Hero
