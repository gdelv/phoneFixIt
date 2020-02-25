import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { Button } from "../shared/Button";
const firstPic = require('../images/pic-slide-1.jpg')
const secondPic = require('../images/pic-slide-2.jpg')
const attLogo = require('../images/att-logo.png')


class HomeCarousel extends React.Component {
    constructor () {
        super ()
        this.state = {

        }
    }

    render () {
        return (
            <>
            <Carousel 
            infiniteLoop={true}
            stopOnHover={false}
            showStatus={false}
            autoPlay={true}
            showArrows={false}
            showIndicators={false}
            interval={4000}
            >
                 <div>
                    <img src={firstPic} alt='first carousel'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={secondPic} alt='second carousel'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
        
            </Carousel>
            <div className='carousel-overlay'></div>
            <img src={attLogo} alt='att-logo' className='att-landing-logo'/>
            <p className='landing-para'>FUSION WIRELESS HAS BEEN A LEADER IN WIRELESS COMMUNICATIONS SINCE 1993 AND IS COMMITTED TO OFFERING OUR CUSTOMERS A WIDE RANGE OF PRODUCTS.</p>
            <Button
                title='STORE LOCATOR'
                className='locator-button'
            />

            {/* scroll button */}
            </>
        )
    }
}

export default HomeCarousel