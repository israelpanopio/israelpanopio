'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Mouse = () => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");
  
  
    useEffect(() => {
      const mouseMove = e => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }
  
      window.addEventListener("mousemove", mouseMove);
  
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      }
    }, []);
  
    const variants = {
      default: {
        x: mousePosition.x - 350,
        y: mousePosition.y - 350,
      }
    }
  
    return (
      <div>
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
      </div>
    );
  }

export default Mouse