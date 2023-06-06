import { motion, useTransform } from 'framer-motion';

const Mountains = ({ scrollYProgress, targetRef, opacity }) => {
  const bottom1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-25vh", "10vh", "40vh"]);
  const bottom2 = useTransform(scrollYProgress, [0, 0.5, 1], ["-20vh", "25vh", "65vh"]);
  const bottom3 = useTransform(scrollYProgress, [0, 0.5, 1], ["-15vh", "40vh", "90vh"]);
  const top4 = useTransform(scrollYProgress, [0, 0.5, 1], ["50vh", "-20vh", "-85vh"]);
  const top5 = useTransform(scrollYProgress, [0, 0.3, 1], ["100vh", "100vh", "1vh"]);
  const backgroundColor = useTransform(scrollYProgress, [0.9, 1], ["rgb(0 0 0)", "rgb(15 23 42)"]);
  const brightness = useTransform(scrollYProgress, [0.5, 0.75], ["brightness(1)", "brightness(0)"]);
    
  return (
    <motion.section className='mountain_div' ref={targetRef} style={{ opacity }}>
      <motion.img
        src='/background/bg_1.png'
        alt='mountains'
        className='bg_1 mountains'
        style={{ bottom: bottom1, filter: brightness }}
        initial={{ bottom: "-35vh" }}
        animate={{ bottom: "-25vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.img
        src='/background/bg_2.png'
        alt='mountains'
        className='bg_2 mountains'
        style={{ bottom: bottom2, filter: brightness, filter: "blur(1px)" }}
        initial={{ bottom: "-40vh" }}
        animate={{ bottom: "-20vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.img
        src='/background/bg_3.png'
        alt='mountains'
        className='bg_3 mountains'
        style={{ bottom: bottom3, filter: brightness, filter: "contrast(120%)"  }}
        initial={{ bottom: "-45vh" }}
        animate={{ bottom: "-15vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.img
        src='/background/bg_4.png'
        alt='mountains'
        className='bg_4 mountains'
        style={{ top: top4 }}
        initial={{ top: "80vh" }}
        animate={{ top: "50vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.div 
        className='blank_after_landing'
        style={{ top: top5, backgroundColor }}
      />
    </motion.section>
  )
}

export default Mountains