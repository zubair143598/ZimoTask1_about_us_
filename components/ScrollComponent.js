import { motion, useTransform, useViewportScroll } from "framer-motion";
import React from 'react'

const ScrollComponent = () => {
    const { scrollYProgress } = useViewportScroll();
    const translateX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  
    

  return (
    <motion.div
    className="fixed top-0 z-10 right-0 h-1 w-screen bg-red-500"
      style={{ translateX }}

  />
);
}

export default ScrollComponent