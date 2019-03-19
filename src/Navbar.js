import React from 'react';
import './Navbar.css';
import dog from './dog.jpg'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {


  render() {
    return (
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-item"> <img id="doglogo" src={dog}/> </li>
          <li className="nav-item"> Pet Finder </li>
          <li className="nav-item"> <Link to="/"> Map </Link> </li>
          <li className="nav-item"><Link to="/signup"> Sign-up </Link> </li>
          <li className="nav-item"><Link to="/addlostdog">Submit a lost dog </Link></li>
        </ul>
      </nav>
    )
  }

}

export default Navbar;

