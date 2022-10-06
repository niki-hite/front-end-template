import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Home Page</NavLink>
      <NavLink to="Halloween">Halloween Page</NavLink>
      <NavLink to="FourthJuly">Fourth of July Page</NavLink>
      <NavLink to="Christmas">Christmas Page</NavLink>
      <NavLink to="Easter">Easter Page</NavLink>
      <NavLink to="form">Form</NavLink>
      <NavLink to="search">Search</NavLink>
    </nav>
  );
}
