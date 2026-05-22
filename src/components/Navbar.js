
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
      
        <a className="navbar-brand fw-bold" href="/">
          <i className="bi bi-tree-fill me-2 text-success"></i>
          Visit <span className="text-gold">Lebanon</span>
        </a>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

     
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/destinations">Destinations</a></li>
            <li className="nav-item"><a className="nav-link" href="/cuisine">Cuisine</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;