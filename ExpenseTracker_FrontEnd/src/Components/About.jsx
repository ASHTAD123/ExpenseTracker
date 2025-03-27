import React from 'react'
import backgroundImage from "../assets/bg.jpg";
import Navigationbar from "../Components/Navbar";


const About = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute", // Ensure full coverage
      left: 0,
      top: 0,
    }}
    >

<Navigationbar/>
    </div>
  )
}

export default About