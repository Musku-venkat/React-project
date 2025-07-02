function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
      <a className="navbar-brand" href="#">CricAlerts</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="/">Live</a></li>
          <li className="nav-item"><a className="nav-link" href="/schedule">Matches</a></li>
          <li className="nav-item"><a className="nav-link" href="/news">News</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;