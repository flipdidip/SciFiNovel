import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to The Extinction Gradient</h1>
        <p className="hero-subtitle">A Science Fiction Blog Experience</p>
        <div className="hero-description">
          <p>
            Join me on an extraordinary journey as I craft a science fiction
            novel chapter by chapter, right here on this blog. Experience
            immersive storytelling with rich illustrations, atmospheric
            soundscapes, and short videos that bring the narrative to life.
          </p>
          <p>
            Follow along as the story unfolds in real-time, witness the creative
            process behind modern digital storytelling. This is about exploring
            new frontiers in creative expression and interactive narrative
            experiences.
          </p>
          <p className="disclaimer">
            <em>
              This project utilizes AI as a creative support tool in the
              development process.
            </em>
          </p>
        </div>
      </div>

      <div className="chapters-navigation">
        <h2>Story Chapters</h2>
        <div className="chapters-grid">
          <Link to="/chapter/1" className="chapter-card available">
            <div className="chapter-number">1</div>
            <div className="chapter-info">
              <h3>Farewell to the Blue Planet</h3>
              <p>Alaric Sen departs for the stars</p>
              <span className="chapter-status">In Progress</span>
            </div>
          </Link>
          <div className="chapter-card upcoming">
            <div className="chapter-number">2</div>
            <div className="chapter-info">
              <h3>Coming Soon</h3>
              <p>The next chapter in our journey</p>
              <span className="chapter-status">Planned</span>
            </div>
          </div>
          <div className="chapter-card upcoming">
            <div className="chapter-number">3</div>
            <div className="chapter-info">
              <h3>Coming Soon</h3>
              <p>More adventures await</p>
              <span className="chapter-status">Planned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
