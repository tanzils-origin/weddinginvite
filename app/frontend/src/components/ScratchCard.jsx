import React, { useRef, useState, useEffect } from 'react';
import '../styles/sctratch.css';

const ScratchCard = () => {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Set canvas size
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Create gradient scratch layer
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#d4af37');
    gradient.addColorStop(0.5, '#f4e5c3');
    gradient.addColorStop(1, '#d4af37');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add text
    ctx.font = '24px "Suisse Medium", serif';
    ctx.fillStyle = '#333333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ Scratch to reveal ✨', rect.width / 2, rect.height / 2);
  }, []);

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(
      (x - rect.left) * 2,
      (y - rect.top) * 2,
      40,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Calculate scratch percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }

    const percentage = (transparent / (pixels.length / 4)) * 100;
    setScratchPercentage(percentage);

    // Add sparkle effect
    if (percentage > 5 && percentage < 95) {
      createSparkle(x - rect.left, y - rect.top);
    }
  };

  const createSparkle = (x, y) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const scratchCard = document.querySelector('.scratch-card-wrapper');
    if (scratchCard) {
      scratchCard.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 600);
    }
  };

  const handleMouseDown = (e) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isScratching) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleTouchStart = (e) => {
    setIsScratching(true);
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
  };

  return (
    <div className="scratch-card-wrapper">
      <div className="scratch-card">
        <div className="scratch-content">
          <div className="invitation-card">
            <div className="card-header">
              <div className="golden-ornament-top"></div>
              <h3 className="invitation-title">Wedding Invitation</h3>
              <div className="golden-ornament-bottom"></div>
            </div>

            <div className="card-body">
              <p className="invitation-intro">Join us in celebrating the union of</p>
              <h2 className="couple-name">Arshiya & Sartaj</h2>

              <div className="event-details">
                <div className="event-item">
                  <span className="event-label">Nikah Ceremony</span>
                  <span className="event-value">April 12th, 2026 • 11:30 AM</span>
                  <span className="event-venue">Darululoom Hussainiya Masjid, International Function Hall</span>
                </div>

                <div className="divider"></div>

                <div className="event-item">
                  <span className="event-label">Valima Reception</span>
                  <span className="event-value">April 14th, 2026 • 7:00 PM</span>
                  <span className="event-venue">Gayathri Function Hall</span>
                </div>
              </div>

              <p className="invitation-closing">Your presence will make our day complete</p>
            </div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className="scratch-canvas"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ opacity: scratchPercentage > 70 ? 0 : 1 }}
        />
      </div>

      {scratchPercentage > 0 && scratchPercentage < 70 && (
        <p className="scratch-hint">Keep scratching...</p>
      )}
    </div>
  );
};

export default ScratchCard;
