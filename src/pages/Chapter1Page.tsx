import "./Chapter1Page.css";

const Chapter1Page = () => {
  return (
    <div className="chapter-page">
      <div className="chapter-header">
        <h1>Chapter 1: The Signal</h1>
        <div className="chapter-meta">
          <span className="chapter-date">Published: July 20, 2025</span>
          <span className="reading-time">~8 min read</span>
        </div>
      </div>

      <div className="chapter-content">
        <div className="chapter-illustration">
          {/* Placeholder for AI-generated illustration */}
          <div className="illustration-placeholder">
            <p>🌌 Illustration: Deep space observatory at dawn</p>
          </div>
        </div>

        <div className="chapter-text">
          <p>
            Dr. Sarah Chen adjusted the frequency modulator for the hundredth
            time that morning, her coffee growing cold as she hunched over the
            array of monitors in the Arecibo successor facility. The new quantum
            receivers had been operational for only three months, but already
            they were picking up signals that defied conventional explanation.
          </p>

          <p>
            "Still chasing ghosts, Sarah?" Marcus called from across the control
            room, his voice carrying the familiar tone of friendly skepticism
            that had become their daily ritual.
          </p>

          <p>
            She didn't look up from her screens. The pattern was there—she was
            certain of it. Buried beneath layers of cosmic background radiation
            and stellar noise, something was trying to communicate. The signal
            appeared every 47 hours and 23 minutes, lasting exactly 4.7 seconds,
            always from the same coordinates in the Vega system.
          </p>

          <p>
            "This isn't background noise," she muttered, enhancing the audio
            filter. "There's structure here. Mathematical precision."
          </p>

          <div className="audio-player">
            <p>
              🔊 Audio: Mysterious signal from Vega (AI-generated atmospheric
              sound)
            </p>
            {/* Placeholder for AI-generated audio player */}
          </div>

          <p>
            As the filters cleared away the static, something emerged that made
            Sarah's breath catch in her throat. It wasn't random. It wasn't
            natural. It was a countdown.
          </p>

          <p>And it was reaching zero.</p>
        </div>

        <div className="chapter-footer">
          <div className="chapter-notes">
            <h3>Author's Notes</h3>
            <p>
              This opening chapter sets the stage for our journey into the
              unknown. I wanted to start with the classic sci-fi trope of first
              contact, but with a modern twist involving quantum communication
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter1Page;
