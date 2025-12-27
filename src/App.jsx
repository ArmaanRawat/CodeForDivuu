import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Relationship start date: December 17, 2025 at 9:02 AM (local time)
  const startDate = new Date("2025-12-17T09:02:00");

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now - startDate;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTime();

    // Update every second
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="love-letter">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-emoji hero-emoji-1">✨</div>
        <div className="hero-emoji hero-emoji-2">⭐</div>
        <div className="hero-emoji hero-emoji-3">💫</div>
        <h1 className="fade-in">
          Time moves differently when I think of you 💕
        </h1>
        <div className="hero-emoji hero-emoji-4">🌟</div>
        <div className="hero-emoji hero-emoji-5">✨</div>
      </section>

      {/* Clock Section */}
      <section className="clock-section fade-in-delay-1">
        <div className="christmas-clock-wrapper">
          <div className="clock-emoji clock-emoji-left">🐼</div>
          <div className="clock-emoji clock-emoji-right">🥰</div>
          <div className="clock-container">
            <div className="clock-card">
              <div className="clock-ornament clock-ornament-top">❄</div>
              <div className="clock-number">{time.days}</div>
              <div className="clock-label">days</div>
              <div className="clock-ornament clock-ornament-bottom">❄</div>
            </div>
            <div className="clock-separator">:</div>
            <div className="clock-card">
              <div className="clock-ornament clock-ornament-top">❄</div>
              <div className="clock-number">
                {String(time.hours).padStart(2, "0")}
              </div>
              <div className="clock-label">hours</div>
              <div className="clock-ornament clock-ornament-bottom">❄</div>
            </div>
            <div className="clock-separator">:</div>
            <div className="clock-card">
              <div className="clock-ornament clock-ornament-top">❄</div>
              <div className="clock-number">
                {String(time.minutes).padStart(2, "0")}
              </div>
              <div className="clock-label">minutes</div>
              <div className="clock-ornament clock-ornament-bottom">❄</div>
            </div>
            <div className="clock-separator">:</div>
            <div className="clock-card">
              <div className="clock-ornament clock-ornament-top">❄</div>
              <div className="clock-number">
                {String(time.seconds).padStart(2, "0")}
              </div>
              <div className="clock-label">seconds</div>
              <div className="clock-ornament clock-ornament-bottom">❄</div>
            </div>
          </div>
          <p className="clock-subtitle">of us 💖</p>
        </div>
      </section>

      {/* Heartfelt Text Section */}
      <section className="text-section fade-in-delay-2">
        <div className="text-block">
          <p>
            {" "}
            Hi Divuu, 🥰 <br />
            You are beautiful. You are brave. You are calm, cool, and so
            incredibly special. Every day, I'm reminded of how lucky I am to
            know you. ✨
          </p>
        </div>

        <div className="text-block">
          <p>
            I admire your strength and the way you move through the world with
            grace and presence. It's something I notice, something I hold close.
            💕
          </p>
        </div>
        <div className="text-block">
          <p>
            I just love to be with you and talk to you. I love to hear your
            voice your yaps and i just want this to continue forever. 🐼💖
          </p>
        </div>

        <div className="text-block">
          <p>
            I'm looking forward to the day we meet in real life. Until then,
            this is my way of saying what I feel. 🌟
          </p>
        </div>
      </section>

      {/* Photo Section */}
      <section className="photo-section fade-in-delay-3">
        <div className="photo-emoji photo-emoji-1">💕</div>
        <div className="photo-emoji photo-emoji-2">✨</div>
        <div className="photo-emoji photo-emoji-3">⭐</div>
        <div className="photo-emoji photo-emoji-4">🌟</div>
        <div className="photo-emoji photo-emoji-5">💖</div>
        <div className="photo-emoji photo-emoji-6">🌸</div>
        {/* Place your image at /public/us.png */}
        <img
          src="/us.png"
          alt="Us together"
          className="photo"
          onError={(e) => {
            // Graceful fallback if image doesn't exist
            e.target.style.display = "none";
          }}
        />
        <div className="photo-emoji photo-emoji-7">💗</div>
        <div className="photo-emoji photo-emoji-8">😊</div>
      </section>

      {/* Closing Line */}
      <section className="closing fade-in-delay-4">
        <p>
          With all my love, always. 💝 (Cant wait to replace this Ai Photo with
          a real one) 🐼✨
        </p>
      </section>

      {/* Spotify Embed - Place at bottom corner */}
      {/* Track: 3005 by Childish Gambino */}
      <div className="spotify-container">
        <iframe
          src="https://open.spotify.com/embed/track/2X6b7zLdIxCejd6GqVcQ9M?utm_source=generator&theme=1"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="3005 by Childish Gambino"
          className="spotify-player"
          style={{ border: "none" }}></iframe>
      </div>
    </div>
  );
}

export default App;
