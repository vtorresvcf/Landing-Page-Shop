import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav class="navbar bg-dark navbar-dark navbar-expand-sm bg-body-tertiary px-4">
          <div class="container-fluid ">
            <a class="navbar-brand nav-link " href="#">
              Start Bootstrap
            </a>

            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent ">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <form
                  class="d-flex d-none d-sm-block mt-2 mx-2 px-5"
                  role="search"
                >
                  <input
                    class="form-control-sm "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <li class="nav-item ">
                  <a class=" nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="#">
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
