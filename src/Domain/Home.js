import React, { useEffect } from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import '../Common/assets/css/main.css'
import LogoSlider from '../Common/pages/LogoSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown19, faArrowRight, faArrowsUpRight, faCircleDot, faPlay, faSearch } from '@fortawesome/free-solid-svg-icons';


// image path 
import doctor from '../Common/assets/image/doctor.png'
import diagram from '../Common/assets/image/diagram.png'
import vector1 from '../Common/assets/image/vector.png'
import goal from '../Common/assets/image/goal.png'
import doctor1 from '../Common/assets/image/patient1.png'
import doctor2 from '../Common/assets/image/patient2.png'
import doctor3 from '../Common/assets/image/patient3.png'
import SimpleSlider from '../Common/pages/SimpleSlider';
import rest1 from '../Common/assets/image/rest1.png'
import rest2 from '../Common/assets/image/rest2.png'
import rest3 from '../Common/assets/image/rest3.png'
import rest4 from '../Common/assets/image/rest4.png'
import rest5 from '../Common/assets/image/rest5.png'
import calender from '../Common/assets/image/calender.png'
import arrowup from '../Common/assets/image/arrowup.png'
import arrowupblack from '../Common/assets/image/blackarrow.png'
import online from '../Common/assets/image/online.png'
import patient4 from '../Common/assets/image/patient4.png'
import patient5 from '../Common/assets/image/patient5.png'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=''>
      <Header />
      <section className='position-relative section-start'>
        <div className='position-relative'>
          <div className='row m-0 align-items-center'>
            <div className='col-lg-7 col-12 h-50'>
              <div className='container-75 section-top'>
                <h3>KlinicQ is distinguished as the leading clinic providing outstanding online medical treatment services.</h3>
                <div className='d-flex align-items-center scheduel-section'>
                  <div>
                    <button className='me-4'>Scheduel</button>
                  </div>
                  <div className='play-around'>
                    <FontAwesomeIcon icon={faPlay} style={{ color: '#FFF' }} beat className='icon' />
                  </div>
                  <div className='px-3'>
                    <p className='m-0'>see demo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-12 right-img '>
              <img src={doctor} className='w-75 pt-lg-5 pt-0' />
            </div>
          </div>
          <div className='success-rate text-center'>
            <img src={diagram} className='' />
            <h1>Success rate This Year</h1>
          </div>
          <div className='goal-section'>
            <img src={goal} />
            <h1>100%</h1>
            <p>Sucess rate This Year</p>
          </div>
          <img src={vector1} className='vector_move' />
        </div>
        <div className='single-click py-5'>
          <div className='container-85'>
            <div className='row m-0'>
              <div className='col-lg-3 col-12 mb-lg-0 mb-3'>
                <h1>Fostering Wellness with a Single Click </h1>
              </div>
              <div className='col-lg-7 col-12 py-lg-0 py-md-0 py-2'>
                <p>KlinicQ is our Electronic Clinical Management System (e CMS) application. Electronic Clinical Management System (e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital operations safely and with no manual error usually associated with handwriting & paper-based records.</p>
              </div>
              <div className='col-2 d-lg-block d-md-block d-none'>
                <div className='arrow-section'>
                  <FontAwesomeIcon icon={faArrowRight} spin style={{ color: '#FFF' }} className='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='m-0' style={{ background: '#D3F2FF' }} />
        <div className='hospital-details py-5'>
          <div className='container-85'>
            <div className='row m-0 align-items-stretch justify-content-center'>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <div className='patient px-2'>
                  <div className='img-section'>
                    <img src={doctor1} className='w-100' />
                  </div>
                  <div className='doctor-content'>
                    <h1>Patient</h1>
                    <div className='row m-0'>
                      <div className='col-lg-9 col-md-9 col-12 p-0'>
                        <p>The patient portal is designed to manage primary & family members under the same account with a unique ID for each member.</p>
                      </div>
                      <div className='col-lg-3 col-md-3 p-0 d-lg-block d-md-block d-none'>
                        <div className='arrow-section'>
                          <FontAwesomeIcon icon={faArrowRight} style={{ color: '#00275A' }} className='icon' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-lg-0 my-md-0 my-sm-0 my-2'>
                <div className='patient px-2'>
                  <div className='img-section'>
                    <img src={doctor2} className='w-100' />
                  </div>
                  <div className='doctor-content'>
                    <h1>Doctor</h1>
                    <div className='d-flex'>
                      <p>A doctor portal is designed based on the physician's specialty and can work for any specialization.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 my-lg-0 my-md-2 my-sm-2'>
                <div className='patient px-2'>
                  <div className='img-section'>
                    <img src={doctor3} className='w-100' />
                  </div>
                  <div className='doctor-content'>
                    <h1>Hospital</h1>
                    <div className='d-flex'>
                      <p>A hospital portal is designed to manage multi-specialty and different consultation modes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fliter-section py-5'>
          <div className='container-85'>
            <div className='box'>
              <div className='search-list search-option'>
                <div className='d-flex align-items-center'>
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#01285C', fontSize: '30px' }} />
                  <div>
                    <label className='ps-3'>Apollo hospital</label><br />
                    <input placeholder='Apollo hospital' className='border-0 ps-3 mt-2' />
                  </div>
                </div>
              </div>
              <div className='search-list search-option mx-3'>
                <div>
                  <label className='ps-3'>Distance Type</label><br />
                  <select className='border-0 ps-3 mt-2' placeholder="Kilometer">
                    <option className='option'>Kilometer</option>
                  </select>
                </div>
              </div>
              <div className='search-list search-option mx-3'>
                <div>
                  <label className='ps-3'>Distance Length</label><br />
                  <select className='border-0 ps-3 mt-2'>
                    <option className='option'>20</option>
                  </select>
                </div>
              </div>
              <div className='search-list search-option mx-3'>
                <div>
                  <label className='ps-3'>Gender</label><br />
                  <select className='border-0 ps-3 mt-2'>
                    <option className='option'>Male</option>
                  </select>
                </div>
              </div>
              <div className='search-list search-option mx-3'>
                <div>
                  <label className='ps-3'>City</label><br />
                  <select className='border-0 ps-3 mt-2'>
                    <option className='option'>Madurai</option>
                  </select>
                </div>
              </div>
              <div className='search-option text-center mx-3'>
                <button className='search'>Search</button>

              </div>
              {/* <div className='search-lists mx-3 d-flex align-items-center'>
                <button>Search</button>
              </div> */}
            </div>
          </div>

        </div>
        <div className='logo-slider container-90'>
          <LogoSlider />
        </div>
        <div className='map-location container-85 py-5'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15665.489968312286!2d76.9576647!3d11.010654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591fc2b091d3%3A0xae8a5f0b335f380a!2sWebbitech!5e0!3m2!1sen!2sin!4v1706012852448!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0, width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr />
        <div className='profile-section ps-lg-5 ps-0'>
          <SimpleSlider />
        </div>
        <div className='rest-section py-lg-5 py-md-4 py-0'>
          <div className='container-90'>
            <div className='row m-0'>
              <div className='col-lg-6 col-12'>
                <h1 className='mb-4'>Rest assured, your health is in the most capable hands.</h1>
                <p className='mb-3'>With medical professionals in more than 100+ countries and a 98% customer satisfaction rate, Doctoralia offers reliable health information. With an extensive network of doctors, we are able to offer a wide range of high quality medical tests. What's more, our prices are up to 70% cheaper than other online providers.</p>
                <div className='d-flex'>
                  <div className='d-flex align-items-center'>
                    <img src={rest2} />
                    <div className='mar-top'>
                      <label className='ps-lg-3 ps-md-3 ps-0'>Available</label><br />
                      <p className='mb-0 ps-lg-3 ps-md-3 ps-0'>900+ specialists</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center mx-4 py-5'>
                    <img src={rest1} />
                    <div className='mar-top'>
                      <label className='ps-lg-3 ps-md-3 ps-0'>Available</label><br />
                      <p className='mb-0 ps-lg-3 ps-md-3 ps-0'>900+ specialists</p>
                    </div>
                  </div>
                </div>
                <div className='book-appointment'>
                  <div className='row m-0'>
                    <div className='col-9'>
                      <h1>Book an Appointment</h1>
                      <p>Book an Appointment</p>
                    </div>
                    <div className='col-3 d-flex align-items-center'>
                      <div className='calender'>
                        <img src={calender} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-12 text-end position-relative'>
                <img src={rest3} className='rest3' />
                <div className='available'>
                  <div className='d-flex align-items-center p-lg-3 p-md-3 p-1'>
                    <FontAwesomeIcon icon={faCircleDot} beat style={{ color: '#46E826', fontSize: '20px' }} className='beat-icon'/>
                    <div className='mar-top'>
                      <label className=''>Available Specialist</label><br />
                      <p className='mb-0 ps-3'>Select Specialist </p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center p-lg-3 p-md-3 p-1'>
                    <img src={rest4} />
                    <div className='doctor-name'>
                      <h2 className='ps-3'>Dr Adinda</h2>
                      <p className='mb-0 text-start ps-3'>Eye Specialist</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center p-lg-3 p-md-3 p-1'>
                    <img src={rest5} />
                    <div className='doctor-name'>
                      <h2 className='ps-3'>Dr Jackson</h2>
                      <p className='mb-0 text-start ps-3'>Ear Specialist</p>
                    </div>
                  </div>
                  <div className='find-doctor text-center my-3'>
                    <button>Find Doctor <img src={arrowup} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='online-section py-5'>
          <div className='container-80'>
            <div className='row m-0'>
              <div className='col-lg-6 col-12 pad-section'>
                <h1>Get 15-Minutes Complimentary online session.</h1>
                <p>Limited Period Offer. Claim Now.</p>
                <button>Book Appoinment <img src={arrowup} /></button>
              </div>
              <div className='col-lg-6  col-12 '>
                <img src={online} className='w-100' />
              </div>
            </div>
          </div>
        </div>
        <hr className='m-0' style={{ background: '#D3F2FF' }} />
        <div className='single-click py-5'>
          <div className='container-85'>
            <div className='row m-0'>
              <div className='col-lg-3 col-12 mb-lg-0 mb-3'>
                <h1>Fostering Wellness with a Single Click </h1>
              </div>
              <div className='col-lg-7 col-12 py-lg-0 py-md-0 py-2'>
                <p>Electronic Clinical Management System (e CMS) application. It is user-friendly, convenient, comprehensive, and integrated to manage all hospital operations safely and with no manual error usually associated with handwriting & paper-based records.</p>
              </div>
              <div className='col-2 d-lg-block d-md-block d-none'>
                <div className='arrow-section'>
                  <FontAwesomeIcon icon={faArrowRight} spin style={{ color: '#FFF' }} className='icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='patient-section py-5'>
          <div className='container-85'>
            <div className='row m-0 '>
              <div className='col-lg-7  col-12 d-flex align-items-stretch'>
                <div class="card" >
                  <img src={patient4} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-text">What to do if you think your child has the flu</h2>
                    <div className='row m-0'>
                      <div className='col-lg-11 col-md-11 col-12 p-0'>
                        <p>If you hear your child start coughing, it's natural to wonder: could this be the flu, or is it another virus like COVID or RSV, or even a common cold? Here's what to know about similarities between these illnesses and what to do if your child does have the flu.</p>
                      </div>
                      <div className='col-1 p-0 d-flex align-items-center'>
                        <div className='d-lg-block d-md-block d-none'>
                          <img src={arrowupblack} className='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-12 my-lg-0 my-2'>
                <div class="card" >
                  <img src={patient5} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h2 class="card-text">What to do if you think your child has the flu</h2>
                    <div className='row m-0'>
                      <div className='col-lg-11 col-md-11 col-12 p-0'>
                        <p>If you hear your child start coughing, it's natural to wonder: could this be the flu, or is it another virus like COVID or RSV, or even a common cold? Here's what to know about similarities between these illnesses and what to do if your child does have the flu.</p>
                      </div>
                      <div className='col-lg-1 col-md-1 col-0 p-0 e d-flex align-items-center'>
                        <div className='d-lg-block d-md-block d-none'>
                          <img src={arrowupblack} className='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home