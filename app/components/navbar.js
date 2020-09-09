import React from 'react';
import './navbar.css';
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
                        <button>Login</button>
                    </li>
                    <li>
                        <button>Signup</button>
                    </li>
                </ul>
        </div>
    )
}
export default navbar;