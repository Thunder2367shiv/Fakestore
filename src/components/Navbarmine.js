import React, { Component}from 'react'
import {
  Link
} from "react-router-dom"

export default class navbar extends Component {

  render() {
    return (
      <div className="mydiv">


        <nav className="navbar fixed-top navbar-expand-lg bg-secondary">
          <div className="container-fluid bg-secondary fs-5">
          <a className="navbar-brand text-white" href="#">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0Ki-EY1PEmBCammJG-YE2368sP5Y57po-A&usqp=CAU" alt="Logo" width="50" height="37" className="d-inline-block align-text-top rounded-3"/>
    </a>
            <Link className="navbar-brand text-light fs-3" to="/">Fake Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item nav-link active bg-secondary text-white border border-white " aria-current="page" to="/electronics">Electronics</Link></li>
                    <li><Link className="dropdown-item nav-link active bg-secondary text-white border border-white " aria-current="page" to="/jewelery">Jewelery</Link></li>
                    <li><Link className="dropdown-item nav-link active bg-secondary text-white border border-white " aria-current="page" to="/men's clothing">Men's clothing</Link></li>
                    <li><Link className="dropdown-item nav-link active bg-secondary text-white border border-white " aria-current="page" to="/women's clothing">Women's clothing</Link></li>
                  </ul>
                </li>
              </ul>
              
              <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn bg-primary border-white text-white" type="submit">Search</button>
              </form>
              <button className="btn bg-danger rounded-2 border-white text-white mx-4" type="submit">Login / <br/> Sign up</button>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}
