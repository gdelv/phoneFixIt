import React from 'react'
import './styles/Footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const attLogo = require('../images/att-logo.png')



const Footer = () => {

    return (

        <div className='footer-wrapper'>
            <div className='background'>
                <div className='top-container'>
                    <img className='att-logo' alt='att-logo' src={attLogo}></img>
                    <h3>MOBILIZING YOUR WORLD</h3>
                    <p>Fusion Wireless has been a leader in wireless communications since 1993 and is committed to offering our customers a wide range of products.</p>
                    <br></br>
                    <a className='link' rel="noopener noreferrer" target='_blank' href='https://www.fusionwireless.com/wordpress/wp-login.php'>EMPLOYEE LINK</a>

                </div>
                <div className='logo-container'>
                    <FaFacebookF
                        color='white'
                        size='3em'
                    />
                    <FaTwitter
                        color='white'
                        size='3em'
                    />
                    <FaInstagram
                        color='white'
                        size='3em'
                    />


                </div>
                <div className='menu-container'>

                    <li><a href='/'>Home</a></li>
                    <li><p>/</p></li>
                    <li><a href='/#store-locator'>Store Locator</a></li>
                    <li><p>/</p></li>
                    <li><a href='/careers'>Careers</a></li>
                    <li><p>/</p></li>
                    <li><a href='/corporate-sales'>Corporate Sales</a></li>
                    <li><p>/</p></li>
                    <li><a href='/#contact'>Contact Us</a></li>
                    <li><p>/</p></li>
                    <li><a rel="noopener noreferrer" target='_blank' href='https://www.fusionwireless.com/wordpress/wp-login.php'>Employees</a></li>

                </div>
                <div className='copyright'>
                    <h2>(877) 933-2355 </h2>
                    <h2>info@fusionwireless.com</h2>
                    <p>2020 © Fusion Wireless. All rights reserved. Design by MES</p>
                    <p>AT&T, the AT&T logo and all other AT&T marks contained herein are trademarks of AT&T Intellectual Property and/or AT&T affiliated companies. AT&T 36USC220506. </p>
                    <img src='https://www.fusionwireless.com/wordpress/wp-content/themes/html5blank-stable/img/logo-fusion-wireless-white.png' alt='logo'/>


                </div>

            </div>
        </div>
    )
}


export default Footer 