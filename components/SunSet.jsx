'use client';

import { motion, useScroll, useTransform, } from 'framer-motion';
import { useRef } from 'react';
import Intro from '@/components/Intro';
import SunSky from '@/components/SunSky';
import Mountains from '@/components/Mountains';

const SunSet = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 0.1", "end end"]
    });  
    const opacity = useTransform(scrollYProgress, [0.7, 0.75], [1, 0]);
    const opacitySun = useTransform(scrollYProgress, [0.5, 0.65], [1, 0]);

  return (
    <div>
        <SunSky scrollYProgress={scrollYProgress} opacitySun={opacitySun} />
        <Mountains scrollYProgress={scrollYProgress} targetRef={targetRef} opacity={opacity} />
        <Intro scrollYProgress={scrollYProgress} />
    </div>
  )
}

export default SunSet