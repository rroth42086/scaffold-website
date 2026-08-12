import type { FC } from 'react';
import './Pricing.css';

const Pricing: FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <span className="pricing-subtitle">Pricing</span>
          <h2>Standardize your video pipeline.</h2>
          <p>Choose the plan that fits your production speed.</p>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-type">Monthly</div>
            <h3>Single User</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">10</span>
              <span className="period">/month</span>
            </div>
            <ul className="card-features">
              <li>Full creative app integration</li>
              <li>Standardized folder structures</li>
              <li>Setup scripts for AE &amp; C4D</li>
              <li>7-day free trial, no credit card</li>
              <li>Cancel anytime</li>
            </ul>
            <a href="https://rnbvfx.gumroad.com/l/scaffold" className="btn btn-outline btn-full">Start 7-Day Trial</a>
          </div>

          <div className="pricing-card highlighted">
            <div className="card-badge">Best Value</div>
            <div className="pricing-type">Annual</div>
            <h3>Single User</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">100</span>
              <span className="period">/year</span>
            </div>
            <p className="pricing-save">2 months free vs. monthly</p>
            <ul className="card-features">
              <li>Everything in Monthly</li>
              <li>Email support</li>
              <li>All updates included</li>
              <li>One-time annual billing</li>
            </ul>
            <a href="https://rnbvfx.gumroad.com/l/scaffold" className="btn btn-primary btn-full">Get Annual Plan</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
