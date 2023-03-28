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
import CodingPromptsChallengeBeginner from './components/codingPromptsChallenge/codingPromptsChallengeBeginner';
import CodingPromptsChallengeIntermediate from './components/codingPromptsChallenge/codingPromptsChallengeIntermediate';
import CodingPromptsChallengeHard from './components/codingPromptsChallenge/codingPromptsChallengeHard';



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
        <Route path="Contact" element = {<Contact />}/>

        {/* routes specifically for coding section */}
        <Route path="Beginner" element= {<CodingPromptsChallengeBeginner/> } />
        <Route path="Intermediate" element= {<CodingPromptsChallengeIntermediate />} />
        <Route path="Hard" element= {<CodingPromptsChallengeHard />} />


        </Routes>
      </div>
    </div>

    </Router>
  );
}

export default App;
