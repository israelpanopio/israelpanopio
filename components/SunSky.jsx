'use client';

import { motion, useTransform } from 'framer-motion';
import { FaAngleDoubleDown } from 'react-icons/fa';

const SunSky = ({ scrollYProgress, opacitySun }) => {
    const top = useTransform(scrollYProgress, [0, 1], ["0", "80vh"]);
    const backgroundImage = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 0.9], [
      "linear-gradient(rgb(0, 154, 238) 2%, rgb(0, 154, 238) 4%, rgb(123, 217, 246) 40%, rgb(208, 239, 255) 50% rgb(255, 255, 255))",
      "linear-gradient(rgb(0, 154, 238) 2%, rgb(0, 154, 238) 4%, rgb(252, 156, 84) 30%, rgb(255, 227, 115) 40%, rgb(255, 222552, 255))",  
      "linear-gradient(rgb(75, 61, 96) 10%, rgb(253, 94, 83) 40%, rgb(252, 156, 84) 80%, rgb(255, 227, 115) 90%, rgb(255, 227, 115))",
      "linear-gradient(rgb(21, 40, 82) 10%, rgb(75, 61, 96) 30%, rgb(75, 61, 96) 50%, rgb(75, 61, 96) 70%, rgb(75, 61, 96))",
      "linear-gradient(rgb(15 23 42) 10%, rgb(15 23 42) 30%, rgb(15 23 42) 50%, rgb(15 23 42) 70%, rgb(15 23 42))"  
    ]);
    const scrollerLabelY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const xPosition = useTransform(scrollYProgress, [0, 0.8], ["55vw", "0vw"]);

  return (
    <motion.div style={{ opacity: opacitySun }}>
      <motion.div 
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className='sun_glare'
        style={{ top }}
        >
            <div className='sun' />
      </motion.div>
      <motion.div
        initial={{ backgroundImage: `linear-gradient(rgb(90, 222, 255) 5%, rgb(90, 222, 255) 10%, rgb(255, 255, 255) 70%, rgb(255, 255, 255) 70%, rgb(255, 255, 255))`}}
        animate={{ backgroundImage: "linear-gradient(rgb(0, 154, 238) 2%, rgb(132, 170, 183) 40%, rgb(255, 255, 255) 80%, rgb(255, 227, 115) 90%, rgb(255, 227, 115))" }}
        style={{ backgroundImage }}
        transition={{ ease: "easeOut", duration: 2 }}
        className='landing'
      />
      <div className='scroll_down'>
        <motion.div className='m-auto' style={{ y: scrollerLabelY }}>
          <p className=''>Scroll Down</p>
          <motion.p 
            className='scroller_text'                        
            animate={{ y: [0, 40, 0]}}
            transition={{                          
              duration: 2,
              times: [0, 0.5, 1], 
              ease: "easeInOut", 
              repeat: Infinity
            }}
          ><FaAngleDoubleDown />
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        initial={{ left: "100vw" }}
        animate={{ left: "55vw" }}
        style={{ left: xPosition }}
        transition={{ ease: "easeOut", duration: 2 }}
        className='clouds_1'
      />
      <motion.div
        initial={{ right: "100vw" }}
        animate={{ right: "55vw" }}
        style={{ right: xPosition }}
        transition={{ ease: "easeOut", duration: 2 }}
        className='clouds_2'
      />
    </motion.div>
  )
}

export default SunSky