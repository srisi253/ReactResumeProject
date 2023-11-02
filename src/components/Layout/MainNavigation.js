import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import personal from '../../images/personal.png';

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.name}><span>Santiago Risi </span><img src={personal} className={classes.personalMobile} alt="PersonalImage" /></div>
      <nav className={`${classes.nav} ${isMenuOpen ? classes.open : ''}`}>
        <div className={classes.menuIcon} onClick={toggleMenu}>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
        </div>
        <ul>
          <li>
            <NavLink
              to='/'
              className={classes.active}
              onClick={closeMenu}
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/experience'
              className={classes.active}
              onClick={closeMenu}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/education'
              className={classes.active}
              onClick={closeMenu}
            >
              Education
            </NavLink>
          </li>
          <li>
            <img src={personal} className={classes.personal} alt="PersonalImage" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

