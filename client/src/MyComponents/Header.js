import React from 'react';
import LegalMosaic from '../Images/Logo/LegalMosaic.jpg';


export default function Header(props) {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" background-color= '#744253' text-align='center'>
      <img src={null} className="Logo"/>
  </a>
   
  <div className="d-flex align-items-center w-100">
  <button className="custom-login-button" type="button" >
          Login
        </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  </div>
  </div>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Legal Rights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Constitution</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Community Forum</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">History of Cases</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Lawyers
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Criminal Lawyers</a></li>
              <li><a className="dropdown-item" href="#">Civil Lawyers</a></li>
              <li><a className="dropdown-item" href="#">Corporate Lawyers</a></li>
              <li><a className="dropdown-item" href="#">Family Lawyers</a></li>
              <li><a className="dropdown-item" href="#">Tax Lawyers</a></li>
              <li><a className="dropdown-item" href="#">Real Estate Lawyers</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Others</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  
</nav>
  )
}