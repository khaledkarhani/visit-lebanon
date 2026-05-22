
import { useState } from 'react';

import baalbek from '../assets/baalbek.jpeg';
import byblos from '../assets/byblos(jbeil).jpeg';
import jeita from '../assets/jeita-grotto.jpg';
import tyre from '../assets/saida.jpeg';
import cedars from '../assets/cedars.jpg';
import beirut from '../assets/beirut.jpeg';


const destinations = [
  { img: baalbek, name: 'Baalbek', region: 'Bekaa Valley', category: 'historical', badge: 'bg-gold',
    text: 'The Heliopolis of the ancient world, home to the colossal Roman Temple of Bacchus.' },
  { img: byblos, name: 'Byblos (Jbeil)', region: 'Mount Lebanon', category: 'historical', badge: 'bg-gold',
    text: 'One of the oldest continuously inhabited cities on Earth — and birthplace of the alphabet.' },
  { img: jeita, name: 'Jeita Grotto', region: 'Nahr el-Kalb', category: 'nature', badge: 'bg-success',
    text: 'A spectacular system of limestone caves explored by boat on an underground lake.' },
  { img: tyre, name: 'Tyre (Sour)', region: 'South Lebanon', category: 'coastal', badge: 'bg-gold',
    text: 'An ancient Phoenician city with a UNESCO Roman hippodrome and beautiful sandy beaches.' },
  { img: cedars, name: 'Cedars of God', region: 'North Lebanon', category: 'nature', badge: 'bg-success',
    text: 'A UNESCO-listed forest of cedars, some over 1,000 years old, beside a winter ski resort.' },
  { img: beirut, name: 'Beirut', region: 'Capital City', category: 'city', badge: 'bg-primary',
    text: 'A vibrant capital where heritage meets nightlife, art galleries, and incredible food.' },
];

// The filter buttons — label is shown, value is matched against category
const filters = [
  { label: 'All', value: 'all' },
  { label: 'Historical', value: 'historical' },
  { label: 'Nature', value: 'nature' },
  { label: 'Coastal', value: 'coastal' },
  { label: 'City', value: 'city' },
];

function Destination() {

  // STATE: which filter is currently active. Starts as 'all'.
  const [activeFilter, setActiveFilter] = useState('all');

  // Decide which cards to show, based on state.
  // If 'all' -> show everything. Otherwise -> keep only matching categories.
  const visible = activeFilter === 'all'
    ? destinations
    : destinations.filter((place) => place.category === activeFilter);

  return (
    <div>
      
      {/* PAGE BANNER */}
      <div className="page-banner" style={{ backgroundImage: `url(${beirut})` }}>
        <div className="page-banner-overlay">
          <div className="container text-center text-white">
            <h1 className="page-banner-title">Destinations</h1>
            <p className="page-banner-sub">Discover Lebanon's most breathtaking places</p>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <section className="py-4 bg-light-cream">
        <div className="container">
          <ul className="nav nav-pills justify-content-center mb-4">
            {filters.map((filter) => (
              <li className="nav-item" key={filter.value}>
                <button
                  className={activeFilter === filter.value ? 'nav-link active' : 'nav-link'}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>

          {/* DESTINATION CARDS — only the visible ones */}
          <div className="row g-4">
            {visible.map((place, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card dest-card-lg border-0 shadow h-100">
                  <img src={place.img} className="card-img-top dest-img-lg" alt={place.name} />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">{place.name}</h5>
                      <span className={`badge ${place.badge}`}>
                        {place.category}
                      </span>
                    </div>
                    <p className="text-muted small">
                      <i className="bi bi-geo-alt-fill text-gold"></i> {place.region}
                    </p>
                    <p className="card-text">{place.text}</p>
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

export default Destination;