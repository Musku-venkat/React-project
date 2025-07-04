import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-2 m-2 rounded-2" style={{ backgroundColor: '#5EABD6' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">

        <div className='d-sm-none d-block text-center'>
          <div className="dropdown">
            <span className="bi bi-list text-light fs-1 p-0 btn dropdown" type="button"  data-bs-toggle="dropdown"></span>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={'/'}>Live</Link></li>
              <li><Link className="dropdown-item" to={'/schedule'}>Matches</Link></li>
              <li><Link className="dropdown-item" to={'/news'}>News</Link></li>
              <li><Link className="dropdown-item" to={'/about'}>About</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <Link className="navbar-brand nav-link active m-0" to={''}><b>CricAlerts</b></Link>
        </div>

        <div className="d-none d-sm-flex justify-content-center">
          <ul className="navbar-nav flex-row gap-4 ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to={"/"}>Live</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={"/schedule"}>Matches</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={"/news"}>News</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={"/about"}>About</Link></li>
          </ul>
        </div>

        <div>
          <Link className="text-white text-decoration-none" title='Login' to={'/login'}><span className="bi bi-person-circle fs-4"></span></Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;