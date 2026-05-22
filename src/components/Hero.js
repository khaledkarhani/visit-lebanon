
import beirut from '../assets/beirut.jpeg';
import baalbek from '../assets/baalbek.jpeg';
import cedars from '../assets/cedars.jpg';

function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

      {/* Slide indicator dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* The slides */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={beirut} className="d-block w-100 hero-img" alt="Beirut" />
          <div className="carousel-caption hero-caption">
            <p className="hero-sub">Welcome to</p>
            <h1 className="hero-title">Lebanon</h1>
            <p className="hero-desc">The pearl of the Middle East</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={baalbek} className="d-block w-100 hero-img" alt="Baalbek" />
          <div className="carousel-caption hero-caption">
            <p className="hero-sub">Discover</p>
            <h1 className="hero-title">Ancient Wonders</h1>
            <p className="hero-desc">6,000 years of history</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={cedars} className="d-block w-100 hero-img" alt="Cedars" />
          <div className="carousel-caption hero-caption">
            <p className="hero-sub">Explore</p>
            <h1 className="hero-title">Nature's Beauty</h1>
            <p className="hero-desc">From mountains to sea</p>
          </div>
        </div>

      </div>

      {/* Prev / Next arrows */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Hero;