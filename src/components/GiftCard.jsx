import React from 'react'
import img6 from '../img/testimonial-07-free-img.jpg'

function GiftCard() {
  return (
<>
{/* <!--Giftcard section start--> */}
    <div class=" testimonial row p-5 "id="test">
        <div class="col-sm-6 testimonialImg">
            <img src={img6} class="roundedimg" />
            <br/><br/><br/><br/><br/><br/>
            <h3>“ Really good service and good quality plants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”</h3>
            <h1 class="mt-5"> Give the Gift of Plants</h1><br/>
            <p><br/><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris
                efficitur elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris
                efficitur elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris
                efficitur elementum.</p>
            <button class="addtocart">BUY GIFT CARD</button>
        </div>

        <div class="col-sm-6 p-5 mb-5 bg-img3" ></div>
    </div>
    
    {/* <!--Giftcard section end--> */}
      
</>
  )
}

export default GiftCard
