import React from "react";
import { NavLink } from "react-router-dom";
import { useGet } from '../static/Loaders';
import Authentificate from "./Authentificate";
/* import Auth from "./Authentificate"; */

function Navigation() {
  let id = window.localStorage.getItem("userID");
  const signInLink = false;
  let isLogin = (Authentificate.isAuth());

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
                    Přihlásit se
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              }

              <li className="nav-item">
                <NavLink className="nav-link" to="/map">
                  Mapa
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/rezervaceFind">
                  Rezervace
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/konference">
                  Konference
                </NavLink>
              </li>

              {
                isLogin ?
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/novaKonference">
                      Přidat konferenci
                    </NavLink>
                  </li>
                  :
                  <li className="nav-item"></li>
              }

              {
                isLogin ?
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/uzivatel">
                      Profil
                    </NavLink>
                  </li>
                  :
                  <div>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/signIn">
                        Přihlásit se
                      </NavLink>
                    </li>
                  </div>
              }

              {
                isLogin ?
                  <div>
                    <button class="btn btn-outline-success" type="button" onClick={() => (Authentificate.logout())}>Odhlásit</button>
                  </div>
                  :
                  <li className="nav-item"></li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
