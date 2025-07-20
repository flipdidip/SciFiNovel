import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to SciFiNovel</h1>
        <p className="hero-subtitle">
          Embark on an interactive journey through the cosmos
        </p>
        <div className="hero-description">
          <p>
            Experience cutting-edge science fiction storytelling where your
            choices shape the narrative. Explore distant worlds, encounter alien
            civilizations, and navigate complex moral dilemmas in this immersive
            interactive novel.
          </p>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Space Exploration</h3>
            <p>Journey through vast galaxies and discover new worlds</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Companions</h3>
            <p>
              Meet artificial intelligences that challenge your understanding
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Dynamic Choices</h3>
            <p>Your decisions create unique storylines and endings</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌌</div>
            <h3>Rich Universe</h3>
            <p>Immerse yourself in detailed sci-fi environments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
