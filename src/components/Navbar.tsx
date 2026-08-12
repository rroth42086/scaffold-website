import type { FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}icon_128x128.png`} alt="Scaffold Logo" className="logo-img" />
          <span className="logo-text">SCAFFOLD</span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#apps">Apps</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-cta">
          <a href="https://github.com/rroth42086/scaffold-releases/releases/latest/download/Scaffold.dmg" className="btn btn-primary">Download Free Trial</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
