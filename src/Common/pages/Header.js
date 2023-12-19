import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../assets/image/Sahyatri-Matrimony-Logo.png';
// import Logo from '../assets/image/logo.png';
// import Logo from '../assets/image/logo-img.png';
import '../assets/css/auth.css'
// import { setClass1Hide } from '../../Redux/CreateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    //   const { isClass1Show } = useSelector((state) => state.navButton)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;

    const navButton = () => {
        alert("ajith")
        // if (isClass1Show == false) {
        //   dispatch(setClass1Hide(true))
        // } else {
        //   dispatch(setClass1Hide(false))
        // }
    }
    const signup = () => {
        navigate('/register')
    }
    const signin = () => {
        navigate('/login')
    }
    return (
        <>
            <header className='contaier-85'>
                <div className='nav-section'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand " href="#">
                                <img src={Logo} alt="Sahyatri-Matrimony-Logo" className='nav-logo' />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                                <div className="collapse navbar-collapse navbarNav justify-content-end navlist" id="navbarSupportedContent">
                                    <ul className="navbar-nav width-navbar">
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Why Choose
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                For Patients
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                For Doctors
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                For Hospital
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Benifits
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header