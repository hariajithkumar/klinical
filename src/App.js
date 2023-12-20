import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Domain/Login'
import Register from './Domain/Register'
import Home from './Domain/Home';
import Header from './Common/pages/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/header' element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
