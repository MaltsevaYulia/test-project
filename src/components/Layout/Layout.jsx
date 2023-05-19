import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className="nav_link" to="/">
            Home
          </NavLink>
          <NavLink className="nav_link" to="/tweets">
            Tweets
          </NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
