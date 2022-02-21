import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation border-bottom border-dark">
      <nav className="navbar navbar-expand navbar-dark bg-warning text-white font-weight-bold">
        <div className="container">
          <NavLink className="navbar-brand text-dark" to="/">
            Tienda Soria
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">
                  Inicio
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/about">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;