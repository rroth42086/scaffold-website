import type { FC } from 'react';
import './AppIcons.css';

interface AppLogo {
  name: string;
  logo?: string;
  isCustom?: boolean;
  color?: string;
}

const apps: AppLogo[] = [
  { 
    name: 'After Effects', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' 
  },
  { 
    name: 'Cinema 4D', 
    isCustom: true,
    color: '#0055FF'
  },
  { 
    name: 'DaVinci Resolve', 
    isCustom: true,
    color: '#1a1a1a'
  },
  { 
    name: 'Final Cut Pro', 
    isCustom: true,
    color: '#5AC8FA'
  },
  { 
    name: 'Flame', 
    logo: 'https://amused-blushing-detail.media.strapiapp.com/autodesk_flame_product_icon_social_400_bebe1e27ab.png'
  },
  { 
    name: 'Illustrator', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' 
  },
  { 
    name: 'InDesign', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg' 
  },
  { 
    name: 'Photoshop', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' 
  },
  { 
    name: 'Premiere Pro', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' 
  }
];

const CustomIcon: FC<{ name: string }> = ({ name }) => {
  if (name === 'Cinema 4D') {
    return (
      <svg viewBox="0 0 100 100" className="app-logo-svg">
        <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="none" stroke="#0055FF" strokeWidth="8" />
        <path d="M50 25 L75 37.5 L75 62.5 L50 75 L25 62.5 L25 37.5 Z" fill="#0055FF" />
      </svg>
    );
  }
  if (name === 'DaVinci Resolve') {
    return (
      <svg viewBox="0 0 100 100" className="app-logo-svg">
        <circle cx="50" cy="50" r="45" fill="#1a1a1a" />
        <circle cx="50" cy="35" r="12" fill="#FF2D55" />
        <circle cx="35" cy="60" r="12" fill="#007AFF" />
        <circle cx="65" cy="60" r="12" fill="#FFCC00" />
      </svg>
    );
  }
  if (name === 'Final Cut Pro') {
    return (
      <svg viewBox="0 0 100 100" className="app-logo-svg">
        <rect x="10" y="10" width="80" height="80" rx="20" fill="#222" />
        <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M30 40 L70 40 M30 50 L70 50 M30 60 L70 60" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="#5AC8FA" opacity="0.6" />
      </svg>
    );
  }
  return null;
};

const AppIcons: FC = () => {
  return (
    <div id="apps" className="app-icons-section">
      <div className="container">
        <p className="app-icons-label">Deep Integration with Industry-Standard Tools</p>
        <div className="app-icons-grid">
          {apps.map((app) => (
            <div key={app.name} className="app-icon-item">
              <div className="app-icon-container">
                {app.isCustom ? (
                  <CustomIcon name={app.name} />
                ) : (
                  <img src={app.logo} alt={app.name} className="app-logo-img" />
                )}
              </div>
              <span className="app-name">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppIcons;
