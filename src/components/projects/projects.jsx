import React from 'react'
import './projects.css';
import { useNavigate } from 'react-router-dom';


const Projects = () => {

  const navigate = useNavigate();

  
  const gotoproject1 = () => {
    navigate('/project-detalis/project1'); 
  };

  const gotoproject2 = () => {
    navigate('/project-detalis/project2'); 
  };

  const gotoproject3 = () => {
    navigate('/project-detalis/project3'); 
  };

  return (
    
      <section id="projects">

        <div className='projcon'>
          <div className='content-projects'>

            <div className='box1'>
              <h1>Project 1</h1>
              <h2 className='imagebox'>zdj projektu</h2>
              <button className='buttonbox' target="_blank" onClick={gotoproject1} >More</button>
            </div>

            <div className='box2'>
              <h1>Project 2</h1>
              <h2 className='imagebox'>zdj projektu</h2>
              <button className='buttonbox' target="_blank" onClick={gotoproject2} >More</button> 
            </div>

            <div className='box3'>
              <h1>Project 3</h1>
              <h2 className='imagebox'>zdj projektu</h2>
              <button className='buttonbox' target="_blank" onClick={gotoproject3} >More</button> 
            </div>

          </div>
        </div>
      
        </section>
    
  )
}

export default Projects
