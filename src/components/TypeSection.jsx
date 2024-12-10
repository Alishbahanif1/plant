import React from 'react'
import img3 from '../img/cat-02-300x300.jpg'
import img4 from '../img/cat-01-300x300.jpg'


function TypeSection() {
  return (
    <>
     {/* <!--section based on type start--> */}
    <div className="row g-10 p-5">
        <div className="col-sm-6 ">
           {/* <!----> */}
            <img src={img3} className="img-fluid bg-img2"/>
           <a href="cacti.html"><button className="btncolor2"  >CACTI</button></a>
        </div>
        <div className="col-sm-6 ">
            <img src={img4} className="img-fluid bg-img2"/>
            <a href="plant.html">
            <button className="btncolor2" >PLANTS</button>
        </a>
        </div>
    </div>
     {/* <!--section based on type end--> */}
      
    </>
  )
}

export default TypeSection
