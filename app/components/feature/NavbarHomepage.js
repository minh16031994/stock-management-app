import React from 'react';
import './NavbarHomepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { faDragon } from '@fortawesome/free-solid-svg-icons'
function navbar(){
    return(
        <div className="container-navbar">
                <div className="icone">
                   <FontAwesomeIcon icon={faDragon} color="white" size="2x"/> <span className="text-logo">...Stock Management </span>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/Login" className="Button">Login</Link>
                    </li>
                    <li>
                        <Link to="/Signup" className="Button">SignUp</Link>
                    </li>
                </ul>
        </div>
    )
}
export default navbar;