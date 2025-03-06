import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.jpg"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <img src={logo1} alt="logo" style={{ borderRadius: '50%', width: '50px' }} />
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/counter" className="nav-link">Counter</Link>
          </li>
          <li className="nav-item">
            <Link to="/mobile/add/" className="nav-link">Add Mobile</Link>
          </li>
          <li className="nav-item">
            <Link to="/mobile/all/" className="nav-link">Mobiles</Link>
          </li>
          <li className="nav-item">
            <Link to="/customer/add/" className="nav-link">Add Customer</Link>
          </li>
          <li className="nav-item">
            <Link to="/customer/all/" className="nav-link">Customer</Link>
          </li>
          <li className="nav-item">
            <Link to="/GetAllMobiles/" className="nav-link">Mobile Cards</Link>
          </li>
          <li className="nav-item">
            <Link to="/Login2/" className="nav-link">Login 2</Link>
          </li>
          <li className="nav-item">
            <Link to="/Register2/" className="nav-link">Register 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;