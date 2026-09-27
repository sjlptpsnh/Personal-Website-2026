"use client";

import { useState } from 'react';
import FloatingIcons from './FloatingIcons';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <a href="mailto:Sujalpratapsingh70@gmail.com" className="email">
          <i className="ph-light ph-envelope"></i> Email
        </a>
        <div 
          className={`menu-btn ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`dropdown-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="https://medium.com/@sjlptpsnh" target="_blank" rel="noopener noreferrer">Blog's</a></li>
            <li><a href="https://www.linkedin.com/in/sjlptpsnh" target="_blank" rel="noopener noreferrer">Connect</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Grid */}
      <main className="main-content">
        {/* Left Column */}
        <div className="col-left">
          <div className="hero-text">
            <h1>Hi,<br/>I'm <span className="highlight">Sujal</span></h1>
            <h2>• Busy Exploring every Rabbit Hole</h2>
          </div>
        </div>

        {/* Middle Column (Image) */}
        <div className="col-center">
          <img src="/sujal-portrait.jpg" alt="Sujal Portrait" className="portrait" />
        </div>

        {/* Right Column */}
        <div className="col-right">
          <div className="abstract-shapes">
            <div className="circle-outline"></div>
            <div className="circle-small-outline"></div>
            <div className="circle-solid"></div>
          </div>
          <div className="info-section">
            <h3 className="section-title">Catching the Wind</h3>
            <p className="expert-text">Drifting the digital sea,<br/>tangled in my next obsession.</p>
            <p className="description">
              A quiet corner where I explore tech,<br/>
              get lost in philosophy books, and<br/>
              try to make sense of it all.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <div className="social-links">
            <a href="https://github.com/sjlptpsnh" target="_blank" rel="noopener noreferrer"><i className="ph-light ph-github-logo"></i></a>
            <a href="https://www.linkedin.com/in/sjlptpsnh" target="_blank" rel="noopener noreferrer"><i className="ph-light ph-linkedin-logo"></i></a>
            <a href="https://instagram.com/sjlptpsnh" target="_blank" rel="noopener noreferrer"><i className="ph-light ph-instagram-logo"></i></a>
            <a href="https://twitter.com/sjlptpsnh" target="_blank" rel="noopener noreferrer"><i className="ph-light ph-x-logo"></i></a>
          </div>
        </div>
        <a href="https://t.me/sjlptpsnh" target="_blank" rel="noopener noreferrer" className="chat-btn">
          Let's Chat <i className="ph-fill ph-chat-circle-dots"></i>
        </a>
      </footer>

      {/* Random Floating Icons */}
      <FloatingIcons />
    </div>
  );
}