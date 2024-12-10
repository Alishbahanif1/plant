import React from 'react'

function Story() {
  return (
    <>
      {/* <!--Story section start--> */}
    <div className="text-center ">
        <h1>
            Our story
            </h1>
            <div className="row">
            <div className="col-sm-2"></div>
       <div className="col-sm-8"> <h2>We are a family owned, retail and wholesale plant
             nursery, located in New York.</h2></div>
             <div className="col-sm-2"></div></div>
             <p id="readmore">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Fusce euismod dui non nunc laoreet, at hendrerit libero fringilla. Curabitur euismod urna non nisl sodales, vel tempor est iaculis. Etiam tincidunt ligula in facilisis pretium. Aliquam erat volutpat. Integer vitae arcu nec nisi auctor tincidunt. Curabitur ut odio odio.</p>
             <button className="btncolor" onclick="readMore()">Read More</button>
    </div>
     {/* <!--story section end--> */}
    </>
  )
}

export default Story
