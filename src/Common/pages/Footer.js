import React from 'react'
import '../assets/css/auth.css'

import Logowhite from '../assets/image/Logo-white.png';

import logo1 from '../assets/image/social1.png'
import logo2 from '../assets/image/social2.png'
import logo3 from '../assets/image/social3.png'
import logo4 from '../assets/image/social4.png'


function Footer() {
    return (
        <>
            <footer>
                <div className='contaier-85'>
                    <div className='row m-0 footer-top align-items-stretch justify-content-center'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                            <img src={Logowhite} />
                            <p>Electronic Clinical Management System(e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital </p>
                            <ul className='social-logo p-0'>
                                <li><a href=''><img src={logo1} /></a></li>
                                <li><a href=''><img src={logo2} /></a></li>
                                <li><a href=''><img src={logo3} /></a></li>
                                <li><a href=''><img src={logo4} /></a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Platform</li>
                                <li>About Us</li>
                                <li>For Patient</li>
                                <li>For Doctor</li>
                                <li>For Hospital</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Company</li>
                                <li>Careers</li>
                                <li>Documentation</li>
                                <li>Plans & Pricing</li>
                                <li>Papers</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title d-lg-block d-md-block d-sm-block d-none  mb-4'></li>
                                <li>Blog Us</li>
                                <li>Contact us</li>
                                <li>For doctor</li>
                                <li>For hospital </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='m-0' />
                <div className='contaier-85'>
                    <div className='row m-0 py-3 footer-bottom align-items-stretch justify-content-start'>
                        <div className='col-lg-6 col-12 text-lg-start text-center'>
                            <p>© 2023 KlinicQ inc</p>
                        </div>
                        <div className='col-lg-6 col-12 text-lg-end text-center'>
                            <ul id="footer-menu">
                                <li>Terms of service</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer