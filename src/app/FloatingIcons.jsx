"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingIcons() {
  const [iconsStyle, setIconsStyle] = useState([]);

  useEffect(() => {
    // Generate random starting positions on client-side
    const iconsList = [
      '/assets/icons/icon-crypto.png',
      '/assets/icons/icon-coins.png',
      '/assets/icons/icon-blockchain.png',
      '/assets/icons/icon-lab.png',
      '/assets/icons/icon-atom.png',
      '/assets/icons/icon-brain.png'
    ];

    const generatedStyles = iconsList.map(src => {
      const randomX = Math.floor(Math.random() * 80) + 10; 
      const randomY = Math.floor(Math.random() * 80) + 10;
      const randomScale = (Math.random() * 0.4) + 0.6;
      
      // Calculate random destination points for the continuous floating animation
      const randomFloatX = [(Math.random() * 100) - 50, (Math.random() * 100) - 50, 0];
      const randomFloatY = [(Math.random() * 100) - 50, (Math.random() * 100) - 50, 0];
      const randomRotate = [(Math.random() * 180) - 90, (Math.random() * 180) - 90, 0];
      
      return {
        src,
        left: `${randomX}vw`,
        top: `${randomY}vh`,
        scale: randomScale,
        floatX: randomFloatX,
        floatY: randomFloatY,
        rotate: randomRotate,
        duration: Math.random() * 20 + 20 // Random duration between 20s and 40s
      };
    });

    setIconsStyle(generatedStyles);
  }, []);

  if (iconsStyle.length === 0) return null;

  return (
    <div id="random-icons-container">
      {iconsStyle.map((style, index) => (
        <motion.img 
          key={index} 
          src={style.src} 
          className="floating-random-icon" 
          alt="floating icon"
          style={{ 
            left: style.left, 
            top: style.top,
          }}
          initial={{ scale: style.scale, rotate: 0, x: 0, y: 0 }}
          animate={{
            x: style.floatX,
            y: style.floatY,
            rotate: style.rotate
          }}
          transition={{
            duration: style.duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      ))}
    </div>
  );
}
