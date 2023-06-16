import { motion, useTransform } from 'framer-motion';

const Mountains = ({ scrollYProgress, targetRef, opacity }) => {
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const backgroundColor = useTransform(scrollYProgress, [0.9, 1], ["rgb(0 0 0)", "rgb(15 23 42)"]);
  const brightness1 = useTransform(scrollYProgress, [0.5, 0.75], ["brightness(1)", "brightness(0)"]);
  const brightness2 = useTransform(scrollYProgress, [0.55, 0.8], ["brightness(1)", "brightness(0)"]);
  const brightness3 = useTransform(scrollYProgress, [0.6, 0.8], ["brightness(1)", "brightness(0)"]);
    
  return (
    <motion.section className='mountain_div' ref={targetRef} style={{ opacity }}>
      <motion.img
        src='/background/bg_1.png'
        alt='mountains'
        className='bg_1 mountains'
        style={{ y: y1, filter: brightness1 }}
        initial={{ bottom: "-35vh" }}
        animate={{ bottom: "-25vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.img
        src='/background/bg_2.png'
        alt='mountains'
        className='bg_2 mountains'
        style={{ y: y2, filter: brightness2}}
        initial={{ bottom: "-40vh" }}
        animate={{ bottom: "-20vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.img
        src='/background/bg_3.png'
        alt='mountains'
        className='bg_3 mountains'
        style={{ y: y3, filter: brightness3}}
        initial={{ bottom: "-45vh" }}
        animate={{ bottom: "-15vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
      <motion.img
        src='/background/bg_4.png'
        alt='mountains'
        className='bg_4 mountains'
        style={{ y: y4 }}
        initial={{ top: "70vh" }}
        animate={{ top: "40vh" }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
    </motion.section>
  )
}

export default Mountains