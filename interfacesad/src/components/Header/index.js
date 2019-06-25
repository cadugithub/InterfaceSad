import React from "react";
import "../Bootstrap/bootstrap.min.css";
import {Link} from 'react-router-dom'
import avalionIcon from '../../img/avalionoff.jpg'
import './style.css'

export default function Header() {
  return (
    <div id="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link class="navbar-brand" to="/"><img id="logo-site" src={avalionIcon} alt="Logo do site" /></Link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link class="nav-link" to="/"> Inicio<span class="sr-only">(Página atual)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Gerenciar<span class="sr-only">(Página atual)</span>
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">
              Sair
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
