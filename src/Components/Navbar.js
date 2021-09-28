import React from 'react';
import logo from './Images/nav-logo.png'
// import { Link ,NavLink, useRouteMatch } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-color">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className="nav-logo" src={logo} alt="nav-logo" />
                        <span className="b-text">MyTaskList</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <button type="button" className="btn btn-outline-info m-1">
                                <a className="nav-buttons" href="/">
                                    Login
                                </a>
                            </button>

                            <button type="button" className="btn btn-outline-info m-1">
                                <a className="nav-buttons" href="/registration">
                                    Register
                                </a>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
