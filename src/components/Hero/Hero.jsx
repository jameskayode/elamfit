      import React from 'react'
      import Header from '../Header/Header'
      import hero_back from '../../assets/hero_image_back.png'
      import hero from '../../assets/hero_image.png'
      import heart from '../../assets/heart.png'
      import calories from '../../assets/calories.png'
      import NumberCounter from 'number-counter'
      import { motion} from 'framer-motion'

      import './hero.css'
      const Hero = () => {
        const transition={type:"spring", duration:3}
       const mobile = window.innerWidth<=768 ? true:false;
        return (
          <div className='hero' id='home'>
            <div className="blur blur-hero"></div>
            <div className="left-hero">
            <Header/>
            <div className="best-add">
              <motion.div
            initial={{left:mobile  ? '178px' : "235px"}}
            whileInView={{left:'8px'}}
            transition={{...transition, type:"tween"}}
              >

              </motion.div>
              <span>the best fitness club in town</span>
            </div>
            

            <div className="hero-h">
            <div>
              
            <span className='stroke-text'>shape</span> <span>Your</span>
            
              
              </div>
          <div><span>
            Ideal Body</span>
            </div>
            <div>
            <span>In here we will help you to shape and build your ideal body and live your life to the fullest</span>
            </div>
            </div>
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix='+' ></NumberCounter>
                  </span><span>Expert Coaches</span></div>
              <div><span> <NumberCounter end={978} start={880} delay='4' preFix='+' ></NumberCounter>
              </span><span>Member Joined</span></div>
              <div><span> <NumberCounter end={50} start={15} delay='5' preFix='+' ></NumberCounter></span><span>Fitness Progress</span></div>

            
            </div>
            <div className="btn-h">
                <button className="btn">Get started</button>
                <button className="btn">Learn More</button>
              </div> 
            </div>

            <div className="right-hero">
          <button className="btn">Join Now</button>
          <motion.div 
          initial={{right: '-1rem'}}
          whileInView={{right:'4rem'}}
          transition={transition}
          className="heart-rate"> 
            <img src={heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>
            <img src={hero} alt="" className="heroimg" />
            <motion.img 
             initial={{right: '11rem'}}
             whileInView={{right:'20rem'}}
             transition={transition}
            src={hero_back} alt="" className="hero-back" />
            
            <motion.div 
            transition={transition}
            initial={{right:'37rem'}}  
            whileInView={{right:'26rem'}}
            className="calories"

            >
              <img src={calories} alt="" />
              <div>
              <span>Calories Burned</span> 
               <span>220 kcal</span>
            
              
            
              </div>
              </motion.div>
            </div>
            
          </div>
        )
      }

      export default Hero
