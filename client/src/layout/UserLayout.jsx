import { Link, Outlet } from "react-router-dom";
import { UserHeader } from "../components/UserHeader.jsx";

export function UserLayout() {
  return (
    <>
      <UserHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div
              className="offcanvas-md offcanvas-end bg-body-tertiary"
              tabIndex="-1"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                  Company name
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      to="/dashboard"
                      className="nav-link d-flex align-items-center gap-2 active"
                      aria-current="page"
                      href="/"
                    >
                      {/* <svg className="bi"><use xlink: href="#house-fill"></use></svg> */}
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/movies"
                      className="nav-link d-flex align-items-center gap-2"
                      href="/"
                    >
                      {/* <svg className="bi"><use xlink: href="#file-earmark"></use></svg> */}
                      Movies
                    </Link>
                  </li>
                </ul>

                <hr className="my-3" />

                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link d-flex align-items-center gap-2"
                      href="/"
                    >
                      {/* <svg class="bi"><use xlink: href="#gear-wide-connected"></use></svg> */}
                      Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link d-flex align-items-center gap-2"
                      href="/"
                    >
                      {/* <svg class="bi"><use xlink: href="#door-closed"></use></svg> */}
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
