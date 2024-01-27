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
                            <a href='https://webbitech.co.in/REACT-JS/klinicq' ><img src={Logowhite} /></a>
                            <p>Electronic Clinical Management System(e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital </p>
                            <ul className='social-logo p-0'>
                                <li><a href='https://www.instagram.com'><img src={logo1} /></a></li>
                                <li><a href='https://www.facebook.com'><img src={logo2} /></a></li>
                                <li><a href='https://twitter.com'><img src={logo3} /></a></li>
                                <li><a href='https://www.youtube.com'><img src={logo4} /></a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Platform</li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/about' className='text-decoration-none text-white'>About Us</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/patients' className='text-decoration-none text-white'>For Patient</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/doctor' className='text-decoration-none text-white'>For Doctor</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/hospitals' className='text-decoration-none text-white'>For Hospital</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Company</li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/benefits' className='text-decoration-none text-white'>Careers</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/feature' className='text-decoration-none text-white'>Documentation</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/benefits' className='text-decoration-none text-white'>Plans & Pricing</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/bookusappointemnt' className='text-decoration-none text-white'>Papers</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-6 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title d-lg-block d-md-block d-sm-block d-none  mb-4'></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/appointment' className='text-decoration-none text-white'>Blog Us</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/contact' className='text-decoration-none text-white'>Contact </a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/doctor' className='text-decoration-none text-white'>For doctor</a></li>
                                <li><a href='https://webbitech.co.in/REACT-JS/klinicq/hospitals' className='text-decoration-none text-white'>For hospital</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='m-0' />
                <div className='contaier-85'>
                    <div className='row m-0 py-3 footer-bottom align-items-stretch justify-content-start'>
                        <div className='col-lg-6 col-12 text-lg-start text-center'>
                        <a href='https://webbitech.co.in/REACT-JS/klinicq' className='text-decoration-none text-white'><p>© 2023 KlinicQ inc</p></a>
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