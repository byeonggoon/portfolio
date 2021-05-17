import React from 'react';
import Button from '../component/Button';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/portfolio">HOME</Link>
                            </li>
                            <li>
                                <Link to="/main">INTRO</Link>
                            </li>
                            <li>
                                <Link to="/Web">WEB PROJECT</Link>
                            </li>
                            {/* <li>
                                <Link to="/Block">BLOCKCHAIN PROJECT</Link>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        
        </div>
    );
};

export default Navbar;

///////////////////////////////////////////
