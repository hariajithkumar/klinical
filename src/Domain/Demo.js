import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import '../Common/assets/css/main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faChartLine, faGalacticSenate, faGavel, faUserDoctor, faCheckCircle, faBadgeCheck, faArrowAltCircleRight, faCircleDot, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import doctor from '../Common/assets/image/doctor.png'

function Demo() {
  return (
    <div className=''>
      <Header />
      <section className='mb-5 position-relative section-start'>
        <div className='row m-0 align-items-stretch'>
          <div className='col-lg-7 col-12 h-50'>
            <div className='container-80 section-top'>
              <h3>Klinico is a modern, web based, comprehensive easy to use Clinic Management System for forward thinking individuals.</h3>
              <div className='row m-0 py-4'>
                <div className='col-lg-6 col-6 text-center'>
                  <button className='me-4'>Scheduel</button>
                </div>
                <div className='col-lg-6 col-6 text-start ps-3 d-flex align-items-center'>
                  <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#99beff", fontSize: '50px' }} className='m-0' />  <button className='see-demo mx-2'>See Demo</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-12 right-img h-50'>
            {/* <div className='h-75'>
              <img src={doctor} className='w-100' />
            </div> */}
          </div>
        </div>
        <div>
          <div className="card rate-card">
            <div className="card-body text-center">
              <h5 className="card-title"><FontAwesomeIcon icon={faChartLine} style={{ color: "#f7f7f7" }} className='fs-1' /></h5>
              <p className="card-text fs-5">Suucess Rate This Year</p>
            </div>
          </div>
          <div className='success-card'>
            {/* <FontAwesomeIcon icon={faGalacticSenate} /> */}
            <FontAwesomeIcon icon={faGavel} style={{ color: "#99beff" }} className='fs-1' />
            <h3>100%</h3>
            <p>Success Rate This Year</p>
          </div>
        </div>
        <div className='single-click pb-5'>
          <div className='container-90 py-3'>
            <div className='row m-0 py-3 click-content'>
              <div className='col-lg-4 col-12'>
                <h1>Fostering Wellness With a Single Click</h1>
              </div>
              <div className='col-lg-6 col-md-10 col-sm-10 col-10 my-lg-0 my-2'>
                <p>OpenEMR is a Free and Open Source electronic health records and medical practice management application. It features fully integrated electronic health records, practice management, scheduling, electronic billing, internationalization, free support, a vibrant community, and a whole lot more.</p>
              </div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#99beff", fontSize: '50px' }} className='mt-2' />
              </div>
            </div>
          </div>
          <hr />
          <div className='container-90 py-3'>
            <div class="row m-0 align-items-stretch justify-content-center">
              <div class="col-lg-4 col-md-6 col-12 ">
                <div className='row m-0 card-content bg-img'>
                  <div className='col-lg-10 col-9'>
                    <h4>Patient</h4>
                    <p>The patient portal is designed to manage primary & family member under the same account</p>
                  </div>
                  <div className='col-lg-2 col-3 p-0'>
                    <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#FFF", fontSize: '50px' }} className='mt-2' />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 my-lg-0 my-md-0 my-2">
                <div className='row m-0 card-content bg-img'>
                  <div className='col-lg-10 col-9'>
                    <h4>Patient</h4>
                    <p>The patient portal is designed to manage primary & family member under the same account</p>
                  </div>
                  <div className='col-lg-2 col-3 p-0'>
                    <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#FFF", fontSize: '50px' }} className='mt-2' />
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 mt-0 mt-md-2">
                <div className='row m-0 card-content bg-img'>
                  <div className='col-lg-10 col-9'>
                    <h4>Patient</h4>
                    <p>The patient portal is designed to manage primary & family member under the same account</p>
                  </div>
                  <div className='col-lg-2 col-3 p-0'>
                    <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#FFF", fontSize: '50px' }} className='mt-2' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-90 py-5 position-relative assure'>
          <div className='row m-0 reset-assure align-items-stretch'>
            <div className='col-lg-6 col-12 reset-content'>
              <h1>Rest assured, your health in the most capable hands</h1>
              <p>With medical professionals in more than 100+ countries and a 98% customer satisfaction rate,Doctoralia offers reliable health information.With an extensive network of doctors,we are able to offer a wide range of high quality medicaltests.What' more,our proces are up to 70% cheeaper than other online providers</p>
              <div className='row m-0 w-lg-75 w-md-75 w-100'>
                <div className='col-6 p-0'>
                  <div className='row m-0'>
                    <div className='col-2 p-0'>
                      <FontAwesomeIcon icon={faUserDoctor} className='fs-1' />
                    </div>
                    <div className='col-10'>
                      <h5>Avaiable</h5>
                      <h6>900+ specialists</h6>
                    </div>
                  </div>
                </div>
                <div className='col-6 p-0'>
                  <div className='row m-0'>
                    <div className='col-2 p-0'>
                      <FontAwesomeIcon icon={faCheckCircle} className='fs-1' />
                    </div>
                    <div className='col-10'>
                      <h5>100%</h5>
                      <h6>900+ specialists</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className='appoinment'>Book Appoinment <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='reset-image'>
                {/* <img src={doctor} className='w-100 h-100' /> */}
              </div>
            </div>
          </div>

          <div className='d-lg-block d-md-block d-sm-block d-none'>
            <div className='available-card '>
              <div className='row m-0'>
                <div className='col-2 p-0'>
                  <FontAwesomeIcon icon={faCircleDot} style={{ color: "#97cd32", }} className='fs-1' />
                </div>
                <div className='col-10'>
                  <h5>Avaiable specialists</h5>
                  <h6>Select specialists</h6>
                </div>
                <div className='col-2 p-0 my-2'>
                  <FontAwesomeIcon icon={faCircleDot} style={{ color: "#97cd32", }} className='fs-1' />
                </div>
                <div className='col-10 my-2'>
                  <h5>Avaiable specialists</h5>
                  <h6>Select specialists</h6>
                </div>
                <hr />
                <div className='col-2 p-0'>
                  <FontAwesomeIcon icon={faCircleDot} style={{ color: "#97cd32", }} className='fs-1' />
                </div>
                <div className='col-10'>
                  <h5>Avaiable specialists</h5>
                  <h6>Select specialists</h6>
                </div>
              </div>
              <div className='find-doctor'>
                <button>Find Doctor <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
              </div>
            </div>
          </div>
          <div className='d-lg-none d-md-none d-sm-none d-block'>
            <div className='available-card '>
              <div className='find-doctor'>
                <button>Find Doctor <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className='schedules'>
          <div className='container-90 py-5 position-relative'>
            <div className='row m-0'>
              <div className='col-lg-6 col-12'>
                <div className='make-schedule'>
                  <button>Find Doctor <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
              </div>
              <div className='col-lg-6 col-12 reset-content'>
                <h1>Rest assured, your health in the most capable hands</h1>
                <p>With medical professionals in more than 100+ countries and a 98% customer satisfaction rate,Doctoralia offers reliable health information.With an extensive network of doctors,we are able to offer a wide range of high quality medicaltests.What' more,our proces are up to 70% cheeaper than other online providers</p>
                <div className='row m-0 w-lg-75 w-md-75 w-100 '>
                  <div className='col-6 p-0'>
                    <div className='row m-0'>
                      <div className='col-2 p-0'>
                        <FontAwesomeIcon icon={faCalendarCheck} className='fs-1' />
                      </div>
                      <div className='col-10'>
                        <h5>Avaiable</h5>
                        <h6>900+ specialists</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 p-0'>
                    <div className='row m-0'>
                      <div className='col-2 p-0'>
                        <FontAwesomeIcon icon={faCheckCircle} className='fs-1' />
                      </div>
                      <div className='col-10'>
                        <h5>100%</h5>
                        <h6>900+ specialists</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className='appoinment'>Book Appoinment <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='container-90 online-session'>
          <div className='row m-0'>
            <div className='col-lg-5 reset-content'>
              <h1>Get 15 - Minutes Complimentary online session</h1>
              <p>Limited Period Offer. Claim now</p>
              <button>Book Appoinment <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
            <div className='col-lg-7'>
              <div className='online-image'>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='single-click card-click pb-5'>
          <div className='container-90 py-3'>
            <div className='row m-0 py-3 click-content'>
              <div className='col-lg-4 col-12'>
                <h1>Fostering Wellness With a Single Click</h1>
              </div>
              <div className='col-lg-6 col-md-10 col-sm-10 col-10 my-lg-0 my-2'>
                <p>OpenEMR is a Free and Open Source electronic health records and medical practice management application. It features fully integrated electronic health records, practice management, scheduling, electronic billing, internationalization, free support, a vibrant community, and a whole lot more.</p>
              </div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#99beff", fontSize: '50px' }} className='mt-2' />
              </div>
            </div>
          </div>
          <div className='card-session container-90 '>
            <div className='row m-0 '>
              <div className='col-lg-7 col-md-6 col-12 d-flex align-items-stretch'>
                <div class="card card-view">
                  <img src={doctor} class="card-img-top" alt="..." height={400} />
                  <div class="card-body">
                    <h5 class="card-title">What to do if you think your has the flu</h5>
                    <p class="card-text">OpenEMR is a Free and Open Source electronic health records and medical practice management application. It features fully integrated electronic health records, practice management, scheduling, electronic billing, internationalization, free support, a vibrant community, and a whole lot more.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 col-md-6 col-12 my-lg-0 my-md-0 my-2'>
                <div class="card card-view">
                  <img src={doctor} class="card-img-top" alt="..." height={400} />
                  <div class="card-body">
                    <h5 class="card-title">What to do if you think your has the flu</h5>
                    <p class="card-text">OpenEMR is a Free and Open Source electronic health records and medical practice management application. It features fully integrated electronic health records, practice management, scheduling, electronic billing, internationalization, free support, a vibrant community, and a whole lot more.</p>
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

export default Demo