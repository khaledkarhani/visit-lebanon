
import byblos from '../assets/byblos(jbeil).jpeg';
import destinations from '../assets/destinations.jpeg';


const facts = [
  { icon: 'bi-geo-alt-fill',    label: 'Capital',    value: 'Beirut' },
  { icon: 'bi-translate',       label: 'Language',   value: 'Arabic' },
  { icon: 'bi-cash-coin',       label: 'Currency',   value: 'Lebanese Pound' },
  { icon: 'bi-people-fill',     label: 'Population', value: '~5.5 Million' },
  { icon: 'bi-globe2',          label: 'Region',     value: 'Western Asia' },
  { icon: 'bi-thermometer-sun', label: 'Climate',    value: 'Mediterranean' },
];


const credits = [
  { role: 'Developer & Designer', name: 'Khaled' },
  { role: 'Images', name: 'Unsplash & project assets' },
  { role: 'Icons', name: 'Bootstrap Icons' },
  { role: 'Fonts', name: 'Google Fonts (Cormorant Garamond, Jost)' },
  { role: 'Framework', name: 'React + Bootstrap 5' },
  { role: 'Learning Reference', name: 'W3Schools' },
];

function About() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner" style={{ backgroundImage: `url(${destinations})` }}>
        <div className="page-banner-overlay">
          <div className="container text-center text-white">
            <h1 className="page-banner-title">About</h1>
            <p className="page-banner-sub">Discover the story behind the Land of the Cedars</p>
          </div>
        </div>
      </div>

      {/* STORY + IMAGE */}
      <section className="section-intro">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-tag">Our Story</span>
              <h2 className="section-heading">The Land of the Cedars</h2>
              <p className="section-text">
                Lebanon is a small Mediterranean country with a history stretching back more than
                6,000 years. From the ancient Phoenician ports to the Roman temples of Baalbek, it has
                been a crossroads of civilizations, cultures, and trade for millennia.
              </p>
              <p className="section-text">
                Today, Lebanon is famous for its warm hospitality, world-renowned cuisine, and a
                landscape that ranges from snow-capped mountains to golden beaches — often within the
                same day's drive.
              </p>
              <p className="section-text">
                This website was built as a student project to celebrate Lebanon's beauty and to
                practice modern web development with React. It is a tribute to a country with an
                enormous soul.
              </p>
            </div>

            <div className="col-lg-6">
              <img src={byblos} alt="Byblos old harbour" className="img-fluid rounded-3 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS GRID */}
      <section className="section-intro bg-light-cream">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">At a Glance</span>
            <h2 className="section-heading">Quick Facts</h2>
          </div>

          <div className="row g-4">
            {facts.map((fact, index) => (
              <div className="col-6 col-md-4" key={index}>
                <div className="why-box text-center h-100">
                  <div className="why-icon">
                    <i className={`bi ${fact.icon}`}></i>
                  </div>
                  <h5>{fact.value}</h5>
                  <p className="text-muted small mb-0">{fact.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDITS */}
      <section className="section-intro">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Acknowledgements</span>
            <h2 className="section-heading">Credits</h2>
            <p className="text-muted">Tools, resources, and references used to build this project</p>
          </div>

          <div className="row g-3 justify-content-center">
            {credits.map((credit, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="exp-card d-flex align-items-center gap-3 p-3">
                  <i className="bi bi-check-circle-fill text-gold fs-4"></i>
                  <div>
                    <p className="mb-0 fw-bold">{credit.role}</p>
                    <p className="mb-0 text-muted small">{credit.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;