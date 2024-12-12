import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Project1 from './components/project-details/project1/project1';
import Project2 from './components/project-details/project2/project2';
import Project3 from './components/project-details/project3/project3';



function MainApp() {
  const location = useLocation();

  const hideNavbarPaths = ['/project-detalis/project1', '/project-detalis/project2', '/project-detalis/project3'];

  return (
    <>

      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<><About /> <Projects /></>} />
        <Route path="/project-detalis/project1" element={<Project1 />} />
        <Route path="/project-detalis/project2" element={<Project2 />} />
        <Route path="/project-detalis/project3" element={<Project3 />} />
      </Routes>
      
    </>

  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
