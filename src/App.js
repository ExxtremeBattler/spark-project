import React from 'react';
import { useState, useEffect } from "react";
import Contact from './pages/Contact/contact';
import Landing from './pages/Landing/Landing';
import CodingPromptsDifficulty from "./components/codingPromptsDifficulty/codingPromptsDifficulty"
import CodingPromptsChallengeBeginner from "./components/codingPromptsChallenge/codingPromptsChallengeBeginner"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"



function App() {
  const [storedProjects, setStoredProjects] = useState([]);

  useEffect(() => {
  localStorage.setItem('storedProjects', JSON.stringify(storedProjects));
}, [storedProjects]);

useEffect(() => {
  const storedProjects = JSON.parse(localStorage.getItem('storedProjects'));
  if (storedProjects) {
   setStoredProjects(storedProjects);
  }
}, []);
  

  return (
  
    <Router>
    <div className="App">
      {/* <Landing /> */}
      <CodingPromptsDifficulty storedProjects = {storedProjects} setStoredProjects = {setStoredProjects}/>
      <div>
        <Routes>
          
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
