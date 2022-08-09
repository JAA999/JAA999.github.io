import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';


function App() {
  return (
    <Router>
    <Navigation />
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
  );
}


export default App;
