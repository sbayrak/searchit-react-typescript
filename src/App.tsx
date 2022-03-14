import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact';
import Search from './components/pages/Search';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <div className='container-lg' style={{ border: '1px solid red' }}>
        {/* <Navbar />
         */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>{' '}
      <Footer />
    </Router>
  );
}

export default App;
