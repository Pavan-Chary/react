import React from 'react'
import Types from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navba(props){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={props.myStyle}>
          <Link className="navbar-brand" to="/About"  style={props.myStyle}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={props.myStyle}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"  style={props.myStyle}>Home</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={props.myStyle}/>
              <button className="btn btn-outline-success" type="submit"  style={props.myStyle}>Search</button>
            </form>
          </div>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.func}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={props.myStyle}>{props.mode+" "} mode</label>
        </div>
        </nav>
    )
}
Navba.Types = {
  title:Types.string
}
Navba.defaultProps={
  title:'hello'
}