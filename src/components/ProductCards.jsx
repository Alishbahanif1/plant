import React from 'react'
import img1 from '../img/Screenshot from 2024-11-26 14-29-31.png'
import img2 from '../img/flower-03-a-400x550.jpg'

function ProductCards() {
  return (
    <>
     {/* <!--product cards start--> */}
    <div class="text-center">
        <h1>Special Offers</h1>
        <h2>Unique deals & offers every single day</h2>
        <div class="d-flex flex-row ">
            <div class="p-2"><img src={img1} class="img-fluid"/></div>
            <div class="align-self-center">
                <div><a className="img2" href="#"><img src={img2}
                            class="img-fluid"></img>
                        <figcaption>Aloe Juvenna Plant</figcaption>$85.00
                    </a></div>
            </div>
        </div>
    </div>
    <div class="text-center">
        <h1>Shop</h1>
        <h2>Most Popular Plants</h2>
        <div class="row g-3">
        <div class="col-lg-3  col-md-4 col-sm-6 "><a className="img2" href="#"><img src={img2} class="img-fluid"></img> 
            <figcaption>Aloe Juvenna Plant</figcaption>$85.00</a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6"><a className="img2" href="#"><img src={img2}class="img-fluid"></img>
            <figcaption>Aloe Juvenna Plant</figcaption>$85.00</a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6"><a className="img2" href="#"><img src={img2}class="img-fluid"></img>
            <figcaption>Aloe Juvenna Plant</figcaption>$85.00</a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6"><a className="img2" href="#"><img src={img2}class="img-fluid"></img>
            <figcaption>Aloe Juvenna Plant</figcaption>$85.00</a>
        </div>
    </div>
    </div>
     {/* <!--product cards end-->
       */}
    </>
  )
}

export default ProductCards
