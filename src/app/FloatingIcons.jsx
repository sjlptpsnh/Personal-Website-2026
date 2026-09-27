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
      '/assets/icons/icon-brain.png',
      '/assets/icons/icon-philosopher.png',
      '/assets/icons/icon-mindmap.png',
      '/assets/icons/icon-yin-yang.png',
      '/assets/icons/icon-pillar.png',
      '/assets/icons/icon-eye.png',
      '/assets/icons/icon-books.png',
      '/assets/icons/icon-openbook.png',
      '/assets/icons/icon-network.png',
      '/assets/icons/icon-link.png',
      '/assets/icons/icon-hacker.png',
      '/assets/icons/icon-spy.png',
      '/assets/icons/icon-gear.png',
      '/assets/icons/icon-code.png',
      '/assets/icons/icon-brackets.png',
      '/assets/icons/icon-superhero.png',
      '/assets/icons/icon-scientist.png',
      '/assets/icons/icon-flask.png',
      '/assets/icons/icon-chemistry.png',
      '/assets/icons/icon-molecule.png'
    ];

    // Pick 5 random unique icons
    const shuffledIcons = [...iconsList].sort(() => 0.5 - Math.random());
    const selectedIcons = shuffledIcons.slice(0, 5);

    // Pre-defined regions (quadrants + bottom edges) so they don't overlap initially and STRICTLY avoid the center face
    const regions = [
      { xMin: 2, xMax: 20, yMin: 5, yMax: 25 },   // Far Top Left
      { xMin: 80, xMax: 95, yMin: 5, yMax: 25 },  // Far Top Right
      { xMin: 2, xMax: 15, yMin: 70, yMax: 90 },  // Far Bottom Left
      { xMin: 85, xMax: 95, yMin: 70, yMax: 90 }, // Far Bottom Right
      { xMin: 15, xMax: 85, yMin: 85, yMax: 95 }  // Absolute Bottom Edge
    ];

    const generatedStyles = selectedIcons.map((src, i) => {
      const region = regions[i];
      const randomX = Math.floor(Math.random() * (region.xMax - region.xMin)) + region.xMin;
      const randomY = Math.floor(Math.random() * (region.yMax - region.yMin)) + region.yMin;
      
      // Random scale variation: from medium-small (0.5) to medium (1.0)
      const randomScale = (Math.random() * 0.5) + 0.5;
      
      // Keep float distance tight so they don't drift back into the center face area
      const randomFloatX = [(Math.random() * 30) - 15, (Math.random() * 30) - 15, 0];
      const randomFloatY = [(Math.random() * 30) - 15, (Math.random() * 30) - 15, 0];
      const randomRotate = [(Math.random() * 180) - 90, (Math.random() * 180) - 90, 0];
      
      return {
        src,
        left: `${randomX}vw`,
        top: `${randomY}vh`,
        scale: randomScale,
        floatX: randomFloatX,
        floatY: randomFloatY,
        rotate: randomRotate,
        duration: Math.random() * 10 + 10 // Faster duration between 10s and 20s
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
