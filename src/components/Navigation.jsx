import React from "react";
import { NavLink } from "react-router-dom";
/* import Auth from "./Authentificate"; */

function Navigation() {
  const signInLink = false;
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/profilUzivatele">
            Profil
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              {signInLink &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/signIn">
                  Přihlášení
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              }
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/konference">
                  Konference
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/novaKonference">
                  Přidat konferenci
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
