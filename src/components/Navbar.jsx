import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 m-2 rounded-2" style={{backgroundColor:'#5EABD6'}}>
      <Link className="navbar-brand nav-link active" to={''}><b>CricAlerts</b></Link>
      <div className="collapse navbar-collapse">
         <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to={"/"}>Live</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={"/schedule"}>Matches</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={"/news"}>News</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to={"/about"}>About</Link></li>
         </ul>
      </div>
      <div>
        <Link className='text-white text-decoration-none' to={'/login'}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;