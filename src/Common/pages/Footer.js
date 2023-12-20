import React from 'react'
import '../assets/css/auth.css'

import Logowhite from '../assets/image/Logo-white.png';



function Footer() {
    return (
        <>
            <footer>
                <div className='contaier-85'>
                    <div className='row m-0 footer-top align-items-stretch justify-content-center'>
                        <div className='col-lg-3 col-md-12 col-sm-12 col-12'>
                            <img src={Logowhite} />
                            <p>We are the most trusted matrimonial service for Indians, offering a wide range of matchmaking services.</p>

                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-4 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Menu</li>
                                <li>Packages</li>
                                <li>About</li>
                                <li>Success Story</li>
                                <li>FAQ’S</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-4 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title'>Privacy & You</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Be Safe Online</li>
                                <li>FAQ’S</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4 col-4 py-3'>
                            <ul className='footer-list p-0 float-lg-end float-md-none'>
                                <li className='content-title mb-4'></li>
                                <li>Member Login</li>
                                <li>Sign Up</li>
                                <li>Partner Search</li>
                                <li>How to Use </li>
                            </ul>
                        </div>
                    </div>
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