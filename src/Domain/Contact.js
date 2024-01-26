import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

// css path 
import '../Common/assets/css/main.css'

// image path 
import book1 from '../Common/assets/image/book1.png'
import book2 from '../Common/assets/image/book2.png'
import book3 from '../Common/assets/image/book3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// image path 
import location from '../Common/assets/image/location.png'

function Contact() {

    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <div className='contact-section'>
            <Header />
            <div className='sub-banner text-center'>
                <h1>Contact Us</h1>
                <p>Contact us today using this form and our support team will reach out as soon as possible.</p>
            </div>
            <hr className='m-0' style={{ color: '#D9F4FF' }} />
            <section className='container-90 py-lg-5 py-0'>
                <div className='row m-0 py-5 align-self-center justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-12 text-center'>
                        <div className='card-section'>
                            <img src={location} />
                            <h1>Our Location</h1>
                            <p>1700 W Blancke St, Kiyev Port South Usa, American</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12 my-lg-0 my-md-0 my-2 text-center '>
                        <div className='card-section'>
                            <img src={location} />
                            <h1>Our Email Address</h1>
                            <p>mail@klinicq.com</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 text-center my-lg-0 my-md-2'>
                        <div className='card-section'>
                            <img src={location} />
                            <h1>Our Location</h1>
                            <p>(536) 694-0265</p>
                        </div>
                    </div>

                </div>
                <div className='row m-0'>
                    <div className='col-lg-6 col-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.489968312286!2d76.9576647!3d11.010654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591fc2b091d3%3A0xae8a5f0b335f380a!2sWebbitech!5e0!3m2!1sen!2sin!4v1706012852448!5m2!1sen!2sin" width="600" height="900" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='form-content'>
                            <h6>Get in Touch!O</h6>
                            <p>Contact us today using this form and our support team will reach out as soon as possible.</p>
                            <form>
                                <div className="row m-0">
                                    <div className="col-md-6">
                                        <label for="your-name" className="form-label">Frist name</label>
                                        <input type="text" className="form-control" id="your-name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="your-surname" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="your-surname" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="your-email" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="your-email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="your-subject" className="form-label">Phone</label>
                                        <input type="emai" className="form-control" id="your-subject" name="your-subject" />
                                    </div>
                                    <div className="col-12">
                                        <label for="your-message" className="form-label">How can we help?</label>
                                        <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                                    </div>
                                </div>
                                <div className='check-section'>
                                    <h1>Services</h1>
                                    <input type='checkbox' /> <span>Hospital Mangement</span><br/>
                                    <input type='checkbox' className='' /> <span>Clinic Mangement</span><br />
                                    <input type='checkbox' className='mt-3' /> <span>User Mangement</span>
                                </div>
                                <button>Book Your Demo <FontAwesomeIcon icon={faArrowRight} style={{ color: '#FFF' }} /></button>
                                <div className='agree-section'>
                                    <div className='d-flex'>
                                        <div className=''>
                                            <input type="checkbox" id="myCheckbox" />
                                            <label for="myCheckbox" class="custom-checkbox"></label>
                                        </div>
                                        <div className='ps-2'>
                                            <p className='p-0'>By signing up, you accept our <span className='policy'>privacy policy</span>. your contact information will only be used within Medesk and will never be shared with third parties.</p>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact