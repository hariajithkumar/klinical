import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Domain/Login'
import Register from './Domain/Register'
import Home from './Domain/Home';
import Header from './Common/pages/Header';
import About from './Domain/About';
import Bookappointment from './Domain/Bookappointment';
import Contact from './Domain/Contact';
import Product from './Domain/Product';
import Feature from './Domain/Feature';
import Appointment from './Domain/Appointment';
import Benefits from './Domain/Benefits';
import Patients from './Domain/Patients';
import Hospitals from './Domain/Hospitals';
import Doctor from './Domain/Doctor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/header' element={<Header />} /> */}
        <Route path='about' element={<About />}/>
        <Route path='bookusappointemnt' element={<Bookappointment />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='product' element={<Product />}/>
        <Route path='feature' element={<Feature />}/>
        <Route path='appointment' element={<Appointment />}/>
        <Route path='benefits' element={<Benefits />}/>
        <Route path='patients' element={<Patients />}/>
        <Route path='hospitals' element={<Hospitals />}/>
        <Route path='doctor' element={<Doctor />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
