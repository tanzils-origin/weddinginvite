import React, { useState, useEffect } from 'react';
import '../styles/countdown.css';

const CountdownTimer = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeRemaining({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeRemaining();
        const interval = setInterval(calculateTimeRemaining, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <h2 className="countdown-title">Counting down to our special day</h2>
            <div className="countdown-grid">
                <div className="countdown-item">
                    <div className="countdown-value">{timeRemaining.days}</div>
                    <div className="countdown-label">Days</div>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-item">
                    <div className="countdown-value">{String(timeRemaining.hours).padStart(2, '0')}</div>
                    <div className="countdown-label">Hours</div>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-item">
                    <div className="countdown-value">{String(timeRemaining.minutes).padStart(2, '0')}</div>
                    <div className="countdown-label">Minutes</div>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-item">
                    <div className="countdown-value">{String(timeRemaining.seconds).padStart(2, '0')}</div>
                    <div className="countdown-label">Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;