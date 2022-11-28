import React from 'react'
import './program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
export const Program = () => {
  return (
    <div>
        <div className="program" id="programs">
        <div className="program-header">
    <span className='stroke-text'>Explore</span>
    <span>Our Programs</span>
    <span className='stroke-text'>To Shape You</span>


        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                  {program.image}
                  <span>{program.heading}</span>
                  <span>{program.details}</span> 
                   <div className="join-now"><span>Join Now</span>
                   <img src={RightArrow} alt="" />
                    </div>
                 
                </div>
           
           ))}
        </div>
        </div>

    </div>
  );
}
