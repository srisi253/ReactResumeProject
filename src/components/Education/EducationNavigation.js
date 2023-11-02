import { NavLink } from 'react-router-dom';
import classes from './EducationNavigation.module.css';

const Education = () => (
  <span>
    <NavLink to='/education' className={classes.button}>
      Education
    </NavLink>
  </span>
);

export default Education;