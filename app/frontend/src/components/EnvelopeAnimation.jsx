
import React, { useState } from 'react';
import '../styles/envelope.css';

const EnvelopeAnimation = ({ onEnvelopeClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="envelope-container">
      < div className ="envelope-background">
        < img
  src ="https://images.unsplash.com/photo-1770757685390-ecdfac51d95e" 
  alt ="Wedding Background"
  className ="envelope-bg-image"
    />
    <div className="envelope-overlay"></div>
      </div >

  <div className="envelope-content">
    < h1 className ="envelope-title">You're Invited</h1>
      < p className ="envelope-subtitle">To the wedding celebration of</p>

        < div
className = {`envelope ${isHovered ? 'hovered' : ''}`}
onMouseEnter = {() => setIsHovered(true)}
onMouseLeave = {() => setIsHovered(false)}
onClick = { onEnvelopeClick }
  >
  <div className="envelope-back">
    < div className ="envelope-flap"></div>
          </div >
  <div className="envelope-front">
    < div className ="wax-seal">
      < div className ="seal-inner">
        < span className ="seal-text">A & S</span>
              </div >
            </div >
          </div >
  <div className="envelope-card">
    < div className ="card-content">
      < p className ="card-label">The Wedding of</p>
        < h2 className ="card-names">Arshiya & Sartaj</h2>
          < div className ="card-date">April 12th, 2025</div>
            </div >
          </div >
        </div >

  <p className="envelope-instruction">Click to open</p>
      </div >
    </div >
  );
};

export default EnvelopeAnimation;
