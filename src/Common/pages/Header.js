import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/image/logo.png';
import '../assets/css/auth.css'
import { setClass1Hide } from '../../Redux/CreateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const { isClass1Show } = useSelector((state) => state.klinical)
    const [isSticky, setIsSticky] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;

    const navButton = () => {
        if (isClass1Show == false) {
            dispatch(setClass1Hide(true))
        } else {
            dispatch(setClass1Hide(false))
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header-section'>
            <header className={isSticky ? 'sticky-element' : 'nav-element'}>
                <div className='nav-section'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid container-95">
                            <a className="navbar-brand klinic-logo" href="https://webbitech.co.in/REACT-JS/klinicq/">
                                <img src={logo} alt="Sahyatri-Matrimony-Logo" className='nav-logo' />
                            </a>
                            {isClass1Show ?
                                <>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => navButton()}>
                                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '30px' }} />
                                    </button>
                                </>
                                :
                                <>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => navButton()}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </>
                            }

                            {isClass1Show ?
                                <>
                                    <div className="sidebar">
                                        <div className={`${isClass1Show == true ? 'nav-show' : ''} collapse navbar-collapse navbarNav justify-content-center navlist`} id="navbarSupportedContent">
                                            <ul className="navbar-nav width-navbar">
                                                <li className='nav-item'>

                                                    <img src={logo} />
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item mb-2'>
                                                    <NavLink exact to={{ pathname: '/feature' }} className={`${pathname === '/feature' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Feature
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/bookusappointemnt' }} className={`${pathname === '/bookusappointemnt' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Bookusappointemnt
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/product' }} className={`${pathname === '/product' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Product
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/appointment' }} className={`${pathname === '/appointment' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Solutions
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/benefits' }} className={`${pathname === '/benefits' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Benefits
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/patients' }} className={`${pathname === '/patients' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        For Patients
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/doctor' }} className={`${pathname === '/doctor' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        For Doctors
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/hospitals' }} className={`${pathname === '/hospitals' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        For Hospital
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/about' }} className={`${pathname === '/about' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        About us
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item'>
                                                    <NavLink exact to={{ pathname: '/contact' }} className={`${pathname === '/contact' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                        Contact
                                                    </NavLink>
                                                </li>
                                                {/* <li className='nav-item'>
                                            <div className='book-btn'>
                                                <button>Book a Demo</button>
                                            </div>
                                        </li> */}
                                            </ul>
                                        </div>
                                    </div>

                                </> :
                                <>

                                </>
                            }
                            <div className="collapse navbar-collapse d-lg-block d-none" id="navbarNavAltMarkup">
                                <div className={`${isClass1Show == true ? 'nav-show' : ''} collapse navbar-collapse navbarNav justify-content-center navlist`} id="navbarSupportedContent">
                                    <ul className="navbar-nav width-navbar">
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className='dropdown-toggle option-list text-decoration-none custom-active' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Why Choose
                                                {/* <FontAwesomeIcon icon={faChevronDown} style={{ color: "#fafafa", }} className='ps-2' /> */}
                                            </a>
                                            <ul className="dropdown-menu mt-3">
                                                <li className='nav-item mb-2 mx-1'>
                                                    <NavLink exact to={{ pathname: '/feature' }} className={`${pathname === '/feature' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Feature
                                                    </NavLink>
                                                </li>
                                                <li className='nav-item mx-1'>
                                                    <NavLink exact to={{ pathname: '/bookusappointemnt' }} className={`${pathname === '/bookusappointemnt' ? 'dropmenu' : 'custom-active'} text-decoration-none`}>
                                                        Bookusappointemnt
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/product' }} className={`${pathname === '/product' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Product
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/appointment' }} className={`${pathname === '/appointment' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Solutions
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/benefits' }} className={`${pathname === '/benefits' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Benefits
                                            </NavLink>
                                        </li>

                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/patients' }} className={`${pathname === '/patients' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                For Patients
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/doctor' }} className={`${pathname === '/doctor' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                For Doctors
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/hospitals' }} className={`${pathname === '/hospitals' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                For Hospital
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/about' }} className={`${pathname === '/about' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                About us
                                            </NavLink>
                                        </li>
                                        <li className='nav-item'>
                                            <NavLink exact to={{ pathname: '/contact' }} className={`${pathname === '/contact' ? 'active' : 'custom-active'} text-decoration-none`}>
                                                Contact
                                            </NavLink>
                                        </li>
                                        {/* <li className='nav-item'>
                                            <div className='book-btn'>
                                                <button>Book a Demo</button>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                                {/* <div className='book-btn'>
                                    <button>Book a Demo</button>
                                </div> */}
                            </div>

                        </div>

                    </nav>

                </div>
            </header>

        </div>
    )
}

export default Header