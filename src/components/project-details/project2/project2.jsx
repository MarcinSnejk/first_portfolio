import React from 'react'
import './project2.css'
import { useNavigate } from 'react-router-dom'

const Project2 = () => {

  const navigate = useNavigate();

  const backhome = () => {navigate ('/')}


  return (
    <div>
      
        <div className='project2-container'>
          <div className='project2-content'>
            
              <div className='p2-leftside'>

                <div className='p2-biggertxt'>Project: </div>
                <div className='p2-biggertxt'>Framework: </div>
                <p className='p2-smallertxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, ex, aperiam, quia accusamus eaque unde veritatis quis fugiat totam veniam iusto rerum deleniti ducimus illum. Ducimus laborum ipsam aut voluptatem!</p>

              </div>

              <div className='p2-rightside'>
                <img src="#" alt="project_picture" />
              </div>

          </div>

          <div className='p2-content_button'> 
                <button className='p2-button' onClick={backhome}>Back to Home</button> 
          </div>


        </div>

        

    </div>
  )
}

export default Project2
