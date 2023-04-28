import NavbarItems from "../modules/navbarItems";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xs navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        <button
          type="button"
          className="navbar-toggler me-2"
          data-bs-toggle="collapse"
          href="#sidebar"
          aria-controls="sidebar"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <a className="navbar-brand" href="/#">
          داشبورد
        </a>  */}

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li> */}

            <NavbarItems />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
