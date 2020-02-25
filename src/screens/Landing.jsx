import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import About from '../components/About'
import { Image } from '../shared/Image'
import { Button } from "../shared/Button"
import MapContainer from '../components/Map'
const storePic = require("../images/store-pic.jpg");
const storePic2 = require("../images/pic-slide-3.jpg")
class Landing extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <HomeCarousel />
        <Image
          src={storePic}
          alt="store"
          className="store-pic" />
        <About />
        <Image
          src={storePic2}
          alt="store2"
          className="animated-pics" />
        <Button
          title='CAREERS'
          className='animatedPics-button' />
        <Image
          src={storePic}
          alt="store"
          className="animated-pics" />
        <Button
          title='CORPORATE SALES'
          className="animatedPics-button" />
        <MapContainer/>
        
      </>
    );
  }
}

export default Landing;
