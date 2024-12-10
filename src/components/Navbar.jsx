import React from 'react'
import logo from '../img/logo-regular.png'


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
    {/* <!--Navbar start--> */} 
        <div className="container-fluid">
        <a className="navbar-brand" href="index.html"><span><img src={logo} /></span></a>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                   <li className="nav-item">
                        <a className="nav-link" href="shop.html">SHOP ALL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="plant.html">PLANTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="cacti.html">CACTI</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="story.html">OUR STORY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="question.html">QUESTIONS?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg> </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg></a>
                    </li>
                </ul>
            </div>
        </div>
     </nav>
     {/*<!--navbar end--> */}
    </>
  )
}

export default Navbar

