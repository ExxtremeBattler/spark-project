//technologies
import React from 'react';

// navbar
import Header from './components/header/header';

// landing page imports
import Contact from './pages/Contact/contact';
import Landing from './pages/Landing/Landing';
import Footer from "./components/footer/footer"

// writing imports
import Gallery from './components/writingPromptsGallery/Gallery';

// coding imports
import CodingPromptsDifficulty from "./components/codingPromptsDifficulty/codingPromptsDifficulty"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"



function App() {

  return (
  
    <Router>
    <div className="App">
      <Header /> 
      {/* navbar will render across all pages */}

      <div className='Routing'>
        <Routes>

        <Route path="/" element = {<Landing />} />
        <Route path="Writing" element = {<Gallery />} />
        {/* <Route path="Drawing" element = {< />} /> */}
        <Route path="Coding" element = {<CodingPromptsDifficulty />} />

        </Routes>
      </div>
    </div>

    </Router>
  );
}

export default App;
