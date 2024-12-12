import React from 'react'
import './project1.css'
import { useNavigate } from 'react-router-dom'

const Project1 = () => {

  const navigate = useNavigate();

  const backhome = () => {navigate ('/')}


  return (
    <div>
      
        <div className='project1-container'>
          <div className='project1-content'>
            
              <div className='p1-leftside'>

                <div className='p1-biggertxt'>Project: </div>
                <div className='p1-biggertxt'>Framework: </div>
                <p className='p1-smallertxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex, aperiam, quia accusamus eaque unde veritatis quis fugiat totam veniam iusto rerum deleniti ducimus illum. Ducimus laborum ipsam aut voluptatem!</p>

              </div>

              <div className='p1-rightside'>
                <img src="#" alt="project_picture" />
              </div>

          </div>

          <div className='p1-content_button'> 
                <button className='p1-button' onClick={backhome}>Back to Home</button> 
          </div>


        </div>

        

    </div>
  )
}

export default Project1
