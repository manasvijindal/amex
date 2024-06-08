import React from 'react'
import './Programs.css'
import program_1 from '../../images/program-1.png'
import program_2 from '../../images/program-2.png'
import program_3 from '../../images/program-3.png'
import program_icon_1 from '../../images/program-icon-1.png'


const Programs = () => {
  return (
    <div className = 'programs'>
      <div className='firstRow'>
        <div className='program'>
            <img src={program_1}/>
            <div className='caption'>
              <img src = {program_icon_1}/>
              <p>Learn</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2}/>
            <div className='caption'>
              <img src = {program_icon_1}/>
              <p>Contribute</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3}/>
            <div className='caption'>
              <img src = {program_icon_1}/>
              <p>Contribute</p>
            </div>
        </div>
      </div>
      <div className='firstRow'>
        <div className='program'>
            <img src={program_1}/>
            <div className='caption'>
              <img src = {program_icon_1}/>
              <p>Contribute</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2}/>
            <div className='caption'>
              <img src = {program_icon_1}/>
              <p>Contribute</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3}/>
            <div className='caption'>
              <img src = {program_icon_1}/>
              <p>Contribute</p>
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default Programs