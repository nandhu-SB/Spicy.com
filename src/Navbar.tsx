// import React, { useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import fb from "./assets/fb0.png";
import ig from "./assets/ig0.png";
import Location from "./assets/location0.png";
import wp from "./assets/wp0.png";
import f1 from "./assets/food/f1.jpg";
import f2 from "./assets/food/f2.jpg";
import f3 from "./assets/food/f3.jpg";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const images: string[] = [f1, f2, f3];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // function changeBackground():void{
  //   setCurrentIndex(((currentIndex+1)%images.length))
  //   console.log(currentIndex)
  // }
  // setInterval(changeBackground,5000);

  //this one works
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  //     console.log(currentIndex)
  //   }, 5000);

  //   return () => clearInterval(interval); // Clear the interval on component unmount
  // }, [images.length]);

  // style={{backgroundImage:`url(${images[currentIndex]})`}}to be used later

  return (
    <div className="navbar">
      <div className="navbar-top">
        <img src={Logo} alt="logo" />
        <h1>Spicy Foodbay</h1>
        <p style={{fontFamily:"Satisfy", color:"white"}}>The Taste of home</p>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100089217134997"
            target="_blank"
          >
            <img src={fb} alt="facebook" id="fb" />
          </a>
          <a
            href="https://www.instagram.com/spicyfoodbay_varkala/"
            target="_blank"
          >
            <img src={ig} alt="instagram" id="ig" />
          </a>
          <a href="https://goo.gl/maps/FKNKTyTDkWcWL9rL8" target="_blank">
            <img src={Location} alt="location" id="location" />
          </a>
          <a href="https://wa.me/08848252584?" target="_blank">
            <img src={wp} alt="whatsapp" id="wp" />
          </a>
        </div>
      </div>
      <div className="navbar-bottom">
        <Link to="/">
          <button>Home</button>
        </Link>

        <a href="https://spicyenu30.web.app/" target="_blank">
          <button>Menu</button>
        </a>
        <Link to="/story">
          <button>Story</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
