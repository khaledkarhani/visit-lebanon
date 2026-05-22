
import { Link } from 'react-router-dom';


import baalbek from '../assets/baalbek.jpeg';
import jeita from '../assets/jeita-grotto.jpg';
import beirut from '../assets/beirut.jpeg';


const previews = [
  {
    img: baalbek,
    name: 'Baalbek',
    region: 'Bekaa Valley',
    text: 'Majestic Roman temples that have stood for two thousand years.',
  },
  {
    img: jeita,
    name: 'Jeita Grotto',
    region: 'Nahr el-Kalb',
    text: 'A breathtaking cave system explored by boat on an underground lake.',
  },
  {
    img: beirut,
    name: 'Beirut',
    region: 'Capital City',
    text: 'A vibrant capital where heritage meets nightlife and great food.',
  },
];

function DestinationPreview() {
  return (
    <section className="section-intro">
      <div className="container">

        <div className="text-center mb-5">
          <span className="section-tag">Where to Go</span>
          <h2 className="section-heading">Top Destinations</h2>
        </div>

        <div className="row g-4">
          {previews.map((place, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card dest-card border-0 shadow h-100">
                <img src={place.img} className="card-img-top dest-img" alt={place.name} />
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <p className="text-muted small">
                    <i className="bi bi-geo-alt-fill text-gold"></i> {place.region}
                  </p>
                  <p className="card-text">{place.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button to the full destinations page */}
        <div className="text-center mt-5">
          <Link to="/destinations" className="btn btn-gold">View All Destinations</Link>
        </div>

      </div>
    </section>
  );
}

export default DestinationPreview;