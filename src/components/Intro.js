
import byblos from '../assets/byblos(jbeil).jpeg';

function Intro() {
  return (
    <section className="section-intro">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT: text column */}
          <div className="col-lg-6">
            <span className="section-tag">Welcome</span>
            <h2 className="section-heading">The Land of the Cedars</h2>
            <p className="section-text">
              Lebanon is a small country with an enormous soul. In a single day you can
              ski snowy mountains in the morning and swim in the Mediterranean by afternoon.
              Ancient cities, world-class food, and warm hospitality make it one of the most
              rewarding destinations on Earth.
            </p>
            <p className="section-text">
              From the Roman temples of Baalbek to the buzzing streets of Beirut, every corner
              tells a story thousands of years in the making.
            </p>
            <a href="/destinations" className="btn btn-gold mt-2">Explore Destinations</a>
          </div>

          {/* RIGHT: image with floating badge */}
          <div className="col-lg-6">
            <div className="intro-img-wrap">
              <img
                src={byblos}
                alt="Byblos old harbour"
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxWidth: '115%', width: '115%' }}
                />
              <div className="float-badge">
                <i className="bi bi-award-fill text-gold fs-4"></i>
                <span>Calmest<br />Place on<br />EARTH</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Intro;