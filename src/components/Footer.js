
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <h5 className="footer-brand">
              <i className="bi bi-tree-fill text-success me-2"></i>Visit Lebanon
            </h5>
            <p className="footer-text">Your guide to the wonders of the Land of the Cedars.</p>
          </div>

       
          <div className="col-md-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/cuisine">Cuisine</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

        
          <div className="col-md-4">
            <h6 className="footer-heading">Follow Us</h6>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

        </div>

        <hr className="footer-hr" />
        <p className="text-center footer-copy mb-0">&copy; 2026 Visit Lebanon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;