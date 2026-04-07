import React, { useState, useEffect, useRef } from 'react';
import { Heart, MapPin, Calendar, Clock, Volume2, VolumeX, Sparkles } from 'lucide-react';
import ScratchCard from '../components/ScratchCard';
import CountdownTimer from '../components/CountdownTimer';
import EnvelopeAnimation from '../components/EnvelopeAnimation';
import '../styles/wedding.css';

const WeddingInvitation = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto-play music after 1 second (muted by default)
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleEnvelopeClick = () => {
    setEnvelopeOpened(true);
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play();
      setIsMusicPlaying(true);
    }
  };

  return (
    <div className="wedding-container">
  {/* Background Music */ }
  <audio ref={audioRef} loop>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
  </audio>

  {/* Music Toggle Button */ }
  <button
    className="music-toggle"
    onClick={toggleMusic}
    aria-label={isMusicPlaying ? "Mute music" : "Play music"}
  >
    {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
  </button>

  {/* Hero Section - Envelope Animation */ }
{
  !envelopeOpened ? (
    <EnvelopeAnimation onEnvelopeClick={handleEnvelopeClick} />
  ) : (
    <>
      {/* Main Invitation Header */}
      <section className="invitation-hero">
        <div className="hero-content">
          <div className="floral-pattern-top"></div>
          <p className="invitation-label">You are cordially invited to the wedding celebration of</p>
          <h1 className="couple-names">
            <span className="bride-name">Arshiya</span>
            <Heart className="heart-icon" />
            <span className="groom-name">Sartaj</span>
          </h1>
          <div className="decorative-line"></div>
          <p className="wedding-tagline">Two hearts, one journey</p>
          <div className="floral-pattern-bottom"></div>
        </div>
      </section>

    {/* Countdown Timer */ }
    <section className="countdown-section">
      <CountdownTimer targetDate="2026-04-12T11:30:00" />
    </section>

    {/* Scratch Card Section */ }
    <section className="scratch-section section-padding">
      <div className="container">
        <h2 className="section-title">Reveal the Invitation</h2>
        <p className="section-subtitle">Scratch to unveil the wedding details</p>
        <ScratchCard />
      </div>
    </section>

    {/* Nikah Ceremony Section */ }
    <section className="ceremony-section nikah-section section-padding">
      <div className="container">
        <div className="ceremony-content">
          <div className="ceremony-text">
            <div className="ceremony-icon">
              <Sparkles size={32} />
            </div>
            <h2 className="ceremony-title">Nikah Ceremony</h2>
            <div className="ceremony-details">
              <div className="detail-item">
                <Calendar className="detail-icon" />
                <div>
                  <p className="detail-label">Date</p>
                  <p className="detail-value">Saturday, April 12th, 2026</p>
                </div>
              </div>
              <div className="detail-item">
                <Clock className="detail-icon" />
                <div>
                  <p className="detail-label">Time</p>
                  <p className="detail-value">11:30 AM onwards</p>
                </div>
              </div>
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <div>
                  <p className="detail-label">Venue</p>
                  <p className="detail-value">Darululoom Hussainiya Masjid, International Function Hall</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ceremony-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.400096122453!2d77.4886511!3d13.8149974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a372349fdd2f%3A0x6f3db80367417661!2sInternation%20Function%20Hall%20Office!5e0!3m2!1sen!2sin!4v1775592308803!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '0px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nikah Venue Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

  {/* Valima Ceremony Section */ }
  <section className="ceremony-section valima-section section-padding">
    <div className="container">
      <div className="ceremony-content reverse">
        <div className="ceremony-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.765750795257!2d77.3570664751174!3d15.171203985385587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6e55ff3f34ba5%3A0xc384061c25640a01!2sGAYATHRI%20FUNCTION%20HALL!5e0!3m2!1sen!2sin!4v1775591969258!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '0px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Valima Venue Map"
          ></iframe>
        </div>
        <div className="ceremony-text">
          <div className="ceremony-icon">
            <Heart size={32} />
          </div>
          <h2 className="ceremony-title">Valima Reception</h2>
          <div className="ceremony-details">
            <div className="detail-item">
              <Calendar className="detail-icon" />
              <div>
                <p className="detail-label">Date</p>
                <p className="detail-value">Monday, April 14th, 2026</p>
              </div>
            </div>
            <div className="detail-item">
              <Clock className="detail-icon" />
              <div>
                <p className="detail-label">Time</p>
                <p className="detail-value">7:00 PM onwards</p>
              </div>
            </div>
            <div className="detail-item">
              <MapPin className="detail-icon" />
              <div>
                <p className="detail-label">Venue</p>
                <p className="detail-value">Gayathri Function Hall</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Blessings Section */ }
  <section className="blessings-section section-padding">
    <div className="container">
      <div className="blessings-content">
        <div className="floating-particles"></div>
        <h2 className="blessings-title">Your presence is our blessing</h2>
        <p className="blessings-text">
          As we embark on this beautiful journey together, we would be honored to have you join us in celebrating our union. Your love, support, and blessings mean the world to us.
        </p>
        <div className="arabic-text">بارك الله لكما وبارك عليكما وجمع بينكما في خير</div>
        <p className="blessings-translation">
          "May Allah bless you both and shower His blessings upon you and unite you in goodness"
        </p>
        <div className="couple-signature">
          <p>With love and gratitude,</p>
          <p className="signature-names">Arshiya & Sartaj</p>
        </div>
      </div>
    </div>
  </section>
        </>
      )}
    </div>
  );
};

export default WeddingInvitation;
