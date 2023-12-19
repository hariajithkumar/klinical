import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import '../Common/assets/css/main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faChartLine, faGalacticSenate, faGavel } from '@fortawesome/free-solid-svg-icons';
import doctor from '../Common/assets/image/doctor.png'

function Home() {
  return (
    <div className=''>
      <Header />
      <section className='mb-5 position-relative'>
        <div className='row m-0 align-items-stretch'>
          <div className='col-lg-7 col-md-6 col-12 h-50'>
            <div className='container-80 section-top'>
              <h3>Klinico is a modern, web based, comprehensive easy to use Clinic Management System for forward thinking individuals.</h3>
              <div className='row m-0 pt-5'>
                <div className='col-4 text-center'>
                  <button className='me-4'>Scheduel</button>
                </div>
                <div className='col-8 text-start ps-3'>
                  <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#99beff", fontSize: '50px' }} className='mt-2' />  <button className='see-demo'>See Demo</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-6 col-12 right-img h-50'>
            <div className='h-75'>
              <img src={doctor} className='w-100' />
            </div>
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
            <p>Suucess Rate This Year</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home