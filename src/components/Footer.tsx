import type { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="logo">
            <span className="logo-icon">S</span>
            <span className="logo-text">Scaffold</span>
          </div>
          <p>Creative Project Launcher for macOS.</p>
          <p className="copyright">© 2026 Route 86 Visuals LLC. All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:rnbvfx@gmail.com">Contact Support</a></li>
              <li><a href="#">License Agreement</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
