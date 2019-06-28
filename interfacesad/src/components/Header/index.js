import React from "react";
import "../Bootstrap/bootstrap.min.css";
import {Link} from 'react-router-dom'
import avalionIcon from '../../img/avalionoff.png'
import './style.css'

export default function Header() {
  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/"><img id="logo-site" src={avalionIcon} alt="Logo do site" /></Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/"> Inicio<span className="sr-only">(Página atual)</span></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
              Sair
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
