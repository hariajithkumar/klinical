import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import profile from '../assets/image/profile.png';

import '../assets/css/main.css'


const SimpleSlider = () => {

    const teamDetails = [
        { "name": 'Dr. Anoop Misra', 'time': '15', 'address': 'Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006', },
        { "name": 'Dr. Anoop Misra', 'time': '15', 'address': 'Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006', },
        { "name": 'Dr. Anoop Misra', 'time': '15', 'address': 'Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006', }
    ]


    const responsiveOptions = {
        0: {
            items: 1,
            nav: false,
        },
        700: {
            items: 2,
            nav: false,
        },
        1000: {
            items: 3,
            nav: true,
            loop: false,
        },
    };

    return (
        <div className='ps-lg-5 ps-2 py-5'>
            <OwlCarousel
                className="owl-theme"
                loop
                autoPlay={true}
                margin={10}
                responsive={responsiveOptions}
            >
                {teamDetails.map((data, index) => (
                    <div key={index} className="item">
                        <div className="search-lists">
                            <div className="row m-0">
                                <div className="col-3 d-flex align-items-center">
                                    <img src={profile} alt="" />
                                </div>
                                <div className="col-9">
                                    <div className="p-3">
                                        <div className="d-flex w-100 res-view">
                                            <h2>{data.name}</h2>
                                            <div className="mx-lg-2 mx-md-2 mx-0">
                                                <h4>Wait Time : {data.time} Minutes</h4>
                                            </div>
                                        </div>
                                        <p>{data.address}</p>
                                    </div>
                                </div>
                                <div className="col-6 p-0">
                                    <button className="w-100 h-100 view-full">View Full Profile</button>
                                </div>
                                <div className="col-6 p-0">
                                    <button className="w-100 book-now">Book An Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>

    );
};

export default SimpleSlider;
