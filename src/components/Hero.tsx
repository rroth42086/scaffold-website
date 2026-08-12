import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Available for macOS</div>
          <h1>Project setup in one click.</h1>
          <p>
            Scaffold creates standardized project structures in your Finder and
            templatizes your files instantly. Built for motion designers, video editors, and VFX artists.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/rroth42086/scaffold-releases/releases/latest/download/Scaffold.dmg" className="btn btn-primary btn-lg">Download Free Trial</a>
            <a href="#features" className="btn btn-outline btn-lg">See How It Works</a>
          </div>
          <p className="hero-meta">macOS only &nbsp;·&nbsp; Apple Silicon &amp; Intel &nbsp;·&nbsp; 7-day free trial, no credit card required.</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img src={`${import.meta.env.BASE_URL}icon_512x512.png`} alt="Scaffold App" className="hero-main-icon" />
            <div className="glass-card">
              <div className="card-top">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="card-inner">
                <div className="line"></div>
                <div className="line half"></div>
                <div className="line lime"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
