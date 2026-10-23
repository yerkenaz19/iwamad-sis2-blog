import { NavLink, Outlet } from 'react-router'

function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <h1 className="logo">Yerkenaz's Blog</h1>

          <nav className="navigation">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/posts">
              Posts
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

            <NavLink to="/protected">
              Protected
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>© 2026 Yerkenaz Sagynbayeva</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout