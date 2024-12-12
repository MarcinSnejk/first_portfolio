import React from 'react'
import './project3.css'
import { useNavigate } from 'react-router-dom'

const Project3 = () => {

  const navigate = useNavigate();

  const backhome = () => {navigate ('/')}


  return (
    <div>
      
        <div className='project3-container'>
          <div className='project3-content'>
            
              <div className='p3-leftside'>

                <div className='p3-biggertxt'>Project: </div>
                <div className='p3-biggertxt'>Framework: </div>
                <p className='p3-smallertxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex, aperiam, quia accusamus eaque unde veritatis quis fugiat totam veniam iusto rerum deleniti ducimus illum. Ducimus laborum ipsam aut voluptatem!</p>

              </div>

              <div className='p3-rightside'>
                <img src="#" alt="project_picture" />
              </div>

          </div>

          <div className='p3-content_button'> 
                <button className='p3-button' onClick={backhome}>Back to Home</button> 
          </div>


        </div>

        

    </div>
  )
}

export default Project3
