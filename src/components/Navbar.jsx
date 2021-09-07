import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () =>{
  return(
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Lindos</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="menu_active" className="nav-link" to="/users">Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  );
};

export default Navbar;