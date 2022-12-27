import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import './style/mediaquery.scss';

import "./style/App.scss";
const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element ={<Home /> } />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/services' element ={<Service />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
