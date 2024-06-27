import "./HeroVid.css";
const HeroVideo = require("../../assets/video/hero.mp4");

const HeroVid = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
      <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <span>PUNE DISTRICT EDUCATION ASSOCIATION'S</span>
          <h1>COLLEGE OF ENGINEERING</h1>
        </div>
      </div>
    </section>
  )
}

export default HeroVid