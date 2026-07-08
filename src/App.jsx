import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import GraduationProjects from './pages/GraduationProjects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/graduation-projects" element={<GraduationProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
