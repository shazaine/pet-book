import React from 'react';
import './css/navbar.css';

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Furbook</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/">Post</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/">Pet</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Find friends..."/>
        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Sniff</button>
      </form>
      </div>
    </nav>
  );
}

export default Navbar;
