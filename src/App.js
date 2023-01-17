import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Menu from './components/navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Footer from './components/footer/footer';
import Recipe from './pages/recipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu className="navbar-expand-md"/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/recipe/:name" element={<Recipe />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
