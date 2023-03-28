import React from 'react';
import { useState, useEffect } from "react";
import Contact from './pages/Contact/contact';
import Landing from './pages/Landing/Landing';
import CodingPromptsDifficulty from "./components/codingPromptsDifficulty/codingPromptsDifficulty"
import CodingPromptsChallengeBeginner from "./components/codingPromptsChallenge/codingPromptsChallengeBeginner"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"



function App() {

  return (
  
    <Router>
    <div className="App">
      <Landing /> 
      <div>
        <Routes>
          
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
