import { NavLink } from 'react-router-dom';
import css from '../Navigation/Style.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={css.link}>
      Home
    </NavLink>
    <NavLink to="/movies" className={css.link}>
      Movies
    </NavLink>
    <hr />
  </nav>
);

export default Navigation;
