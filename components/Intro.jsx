'use client';

import { FaGithubSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { motion, useTransform } from 'framer-motion';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react';

const Intro = ({ scrollYProgress }) => {
    const opacityHi = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
    const opacityName = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
    const opacityMessage = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
    const opacityButton = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
    const opacityNav = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
    const opacityIcon1 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
    const opacityIcon2 = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);
    const opacityIcon3 = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
    const opacityIcon4 = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);


  return (         
    <div className='intro_message'>
        <motion.p style={{ opacity: opacityHi }} className='text-lg'>Hi, my name is </motion.p>
        <motion.p style={{ opacity: opacityName, color: "white" }} className='text-5xl font-bold'>Israel Panopio</motion.p>
        <motion.p style={{ opacity: opacityMessage }} className='md:text-lg text-xl mt-2'> 
            I'm a <b>web developer</b> and a permanent resident of Canada. A Filipino who moved to the Beautiful British Columbia to chase more sunsets. 
        </motion.p>
        <br />
        <motion.button
            style={{ opacity: opacityButton, color: "white" }}
            className='md:text-base text-xl py-2 px-4 rounded-full intro_button'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        ><motion.a 
            href="mailto:israelbrowser@gmail.com" 
            whileTap={{ scale: 0.9 }}>
            Let's work together!
        </motion.a>
        </motion.button>          

        <motion.div className='nav' style={{ opacity: opacityNav }}>
            <LinkS
                className='navLinkScroll my-0 py-1 '
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={60}
            >ABOUT</LinkS>
            <LinkS
                className='navLinkScroll py-1 my-0'
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={60}
            >PROJECTS</LinkS>
            <LinkS
                className='navLinkScroll  py-1 my-0'
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={60}
            >EXPERIENCE</LinkS>
        </motion.div>

        <div className='flex flex-row items-center justify-center md:justify-start gap-8 md:gap-1 text-4xl'>
            <motion.a 
                style={{ opacity: opacityIcon3 }}
                className='intro_icons' 
                href="https://github.com/israelpanopio"
            ><FaGithubSquare /></motion.a>
            <motion.a 
                style={{ opacity: opacityIcon1 }}
                className='intro_icons' 
                href="https://www.linkedin.com/in/israel-panopio-ba8399187/"
            ><FaLinkedin /></motion.a>
            <motion.a 
                style={{ opacity: opacityIcon2 }}
                className='intro_icons' 
                href="https://www.youtube.com/"
            ><FaYoutube /></motion.a>
            <motion.a 
                style={{ opacity: opacityIcon4 }}
                className='intro_icons' 
                href="https://www.instagram.com/dadiru.pig/"
            ><FaInstagram /></motion.a>
        </div>
    </div>
  )
}

export default Intro