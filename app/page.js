'use client';

import { motion} from 'framer-motion';
import Mouse from '@/components/Mouse';
import About from '@/components/About';
import Experience from '@/components/Experience';
import SunSet from '@/components/SunSet';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {  
    
  return (
  <div style={{margin: "0"}}>
    <img src="/sunset.jpg" style={{ display: "none"}} />
    <Mouse />
    <SunSet />
    <motion.div className='content_div'>
      <About />
      <Projects />
      <Experience />
      <Footer />
    </motion.div>
  </div>
  )
}
