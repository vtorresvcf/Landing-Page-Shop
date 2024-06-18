import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="navbar bg-dark navbar-dark navbar-expand-sm bg-body-tertiary px-4">
          <div className="container-fluid ">
            <a className="navbar-brand nav-link " href="#">
              Tienda online de productos
            </a>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent "
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <form
                  className="d-flex d-none d-sm-block mt-2 mx-2 px-5"
                  role="search"
                >
                  <input
                    className="form-control-sm "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <li className="nav-item ">
                  <a className=" nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
