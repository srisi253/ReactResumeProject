import Profile from './Profile/Profile';
import Certifications from './Certifications/Certifications';
import classes from './ProfileCertifications.module.css';

const ProfileCertifications = () => (
  <div className={classes.container}>
    <Profile />
    <Certifications />
  </div>
);

export default ProfileCertifications;