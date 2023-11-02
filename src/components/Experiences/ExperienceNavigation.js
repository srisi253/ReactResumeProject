import { NavLink } from 'react-router-dom';
import classes from './ExperienceNavigation.module.css';

const ExperienceNavigation = () => (
  <header>
    <span>
      <NavLink to='/experience' className={classes.button}>
        Experience
      </NavLink>
    </span>
  </header>
);

export default ExperienceNavigation;