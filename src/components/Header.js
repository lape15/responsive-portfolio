import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-nav">
      <div className="row">
        <div className="col-md-6">
          <nav
            id="navbar"
            className="navbar navbar-expand-sm navbar-light bg-light"
          >
            <NavLink to="/" class="navbar-brand around">
              Name
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#portfolio"
              aria-controls="portfolio"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="portfolio">
              <ul className="navbar-nav ml-auto mt-2 mr-4">
                <li className="nav-item mr-3">
                  <NavLink to="/" class="nav-link around">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-md-6 main-nav__nav-2">
        </div>
      </div>
    </div>
  );
};
export default Header;
