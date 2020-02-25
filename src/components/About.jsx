import React from 'react'
import { Button } from '../shared/Button'

const About = () => {
    return (
        <div className='about'>
        <h2>ABOUT FUSION WIRELESS</h2>
        <p>
            We care at Fusion Wireless. After all, we've been keeping businesses
            and families connected for over 25 years! Sure there are many places
            to get a cell phone, but are they giving you the best price possible
            with the care and attention you deserve?
        </p>
        <p> 
            At Fusion, our dedicated
            and experienced staff will ensure you are getting the phone that
            best suits your interests, not ours. Our communications specialists
            are there for you for the life of your phone; you will always have
            our direct email address. And in the unlikely event your unhappy
            with your purchase, bring it back. If you're not completely
            satisfied, neither are we. 
            </p>
            <p>Let us know how we can better serve you.
            Give us a call today at 877-933-CELL and see what we can do for you!
        </p>
        <Button
            title='Need Help? 877-933-CELL'
            className='need-help-button'
        />
        </div>
    )
}

export default About