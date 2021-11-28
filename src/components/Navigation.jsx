import React from "react";
import { NavLink } from "react-router-dom";
import Authentificate from "./Authentificate";
/* import Auth from "./Authentificate"; */

function Navigation() {
  const signInLink = false;
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/uzivatel">
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
              <li className="nav-item">
                <NavLink className="nav-link" to="/uzivatel">
                  Profil
                </NavLink>
              </li>
              <button class="btn btn-outline-success" type="button" onClick={()=>(Authentificate.logout())}>Odhlásit</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
