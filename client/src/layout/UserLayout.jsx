import { Link, Outlet } from "react-router-dom";
import { UserHeader } from "../components/UserHeader.jsx";

export function UserLayout() {
  return (
    <>
      <UserHeader />
      <div class="container-fluid">
        <div class="row">
          <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div
              class="offcanvas-md offcanvas-end bg-body-tertiary"
              tabindex="-1"
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="sidebarMenuLabel">
                  Company name
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#sidebarMenu"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <Link
                      to="/dashboard"
                      class="nav-link d-flex align-items-center gap-2 active"
                      aria-current="page"
                      href="/"
                    >
                      {/* <svg class="bi"><use xlink: href="#house-fill"></use></svg> */}
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/movies"
                      class="nav-link d-flex align-items-center gap-2"
                      href="/"
                    >
                      {/* <svg class="bi"><use xlink: href="#file-earmark"></use></svg> */}
                      Movies
                    </Link>
                  </li>
                </ul>

                <hr class="my-3" />

                <ul class="nav flex-column mb-auto">
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link d-flex align-items-center gap-2"
                      href="/"
                    >
                      {/* <svg class="bi"><use xlink: href="#gear-wide-connected"></use></svg> */}
                      Settings
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      to="/"
                      class="nav-link d-flex align-items-center gap-2"
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

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
