import type { FC } from 'react';
import './Features.css';

const Features: FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <span className="features-subtitle">Standardized. Organized. Efficient.</span>
          <h2>Skip the setup. Start the story.</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>One-Click Project Creation</h3>
            <p>
              Start with a complete, standardized project folder structure
              and your pre-configured project files for every new job.
            </p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🛠️</div>
            <h3>Deep App Integration</h3>
            <p>
              Automatically configures resolution, frame rate, color space, and 
              render settings in apps like After Effects, C4D, and Flame.
            </p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">📂</div>
            <h3>Total Customization</h3>
            <p>
              Use your own folder structures and starter templates. Scaffold adapts
              to your personal workflow, not the other way around.
            </p>
          </div>
        </div>
        
        <div className="feature-highlight">
          <div className="highlight-content">
            <div className="badge">For Power Users</div>
            <h3>Dynamic Setup Scripts</h3>
            <p>
              Scaffold generates app-specific setup scripts alongside each project file.
              These scripts apply paths and settings that can't be baked into a 
              template file, ensuring your project is ready for production.
            </p>
            <ul className="highlight-list">
              <li>Automatic AE background watcher</li>
              <li>Persistent C4D setup plugin</li>
              <li>Wiretap integration for Autodesk Flame</li>
              <li>MediaHub bookmark deployment for Flame</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div className="code-header">
              <span className="code-lang">scaffold_ae_setup.jsx</span>
              <span className="code-label">Generated Script</span>
            </div>
            <pre className="code-block">
{`// Auto-generated project config
app.project.bitsPerChannel = 16;
app.project.workingColorSpace = "Rec. 709";

var mainComp = app.project.items.addComp(
  "PROJECT_NAME", 1920, 1080, 1.0, 10, 24
);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
