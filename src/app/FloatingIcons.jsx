"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingIcons() {
  const [iconsStyle, setIconsStyle] = useState([]);

  // We use standard React hydration strategy.
  // The state is empty on server, so we render an empty container.
  // After hydration on the client, useEffect populates the icons and triggers re-render.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

    const shuffledIcons = [...iconsList].sort(() => 0.5 - Math.random());
    const selectedIcons = shuffledIcons.slice(0, 5); // 5 icons as requested

    // Pre-defined regions (quadrants + edges) keeping well away from the center face
    const regions = [
      { xMin: 5, xMax: 20, yMin: 10, yMax: 30 },   // Top Left
      { xMin: 80, xMax: 95, yMin: 10, yMax: 30 },  // Top Right
      { xMin: 5, xMax: 15, yMin: 60, yMax: 85 },   // Bottom Left
      { xMin: 85, xMax: 95, yMin: 60, yMax: 85 },  // Bottom Right
      { xMin: 20, xMax: 80, yMin: 85, yMax: 95 }   // Bottom Center (below face)
    ];

    const generatedStyles = selectedIcons.map((src, i) => {
      const region = regions[i % regions.length];
      const randomX = Math.floor(Math.random() * (region.xMax - region.xMin)) + region.xMin;
      const randomY = Math.floor(Math.random() * (region.yMax - region.yMin)) + region.yMin;
      
      // Random scale variation
      const randomScale = (Math.random() * 0.5) + 0.5;
      
      // Moderate float distance for noticeable but smooth movement
      const randomFloatX = [(Math.random() * 40) - 20, (Math.random() * 40) - 20, (Math.random() * 40) - 20, 0];
      const randomFloatY = [(Math.random() * 40) - 20, (Math.random() * 40) - 20, (Math.random() * 40) - 20, 0];
      const randomRotate = [(Math.random() * 180) - 90, (Math.random() * 180) - 90, (Math.random() * 180) - 90, 0];
      
      return {
        src,
        left: `${randomX}%`,
        top: `${randomY}%`,
        scale: randomScale,
        floatX: randomFloatX,
        floatY: randomFloatY,
        rotate: randomRotate,
        duration: Math.random() * 6 + 9 // Moderate duration between 9s and 15s
      };
    });

    setIconsStyle(generatedStyles);
  }, []);

  // Ensure the component renders on the server to prevent hydration mismatch,
  // We render the container immediately so the layout is stable and we can inspect it.
  if (!mounted || iconsStyle.length === 0) return <div id="random-icons-container"></div>;

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
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      ))}
    </div>
  );
}
