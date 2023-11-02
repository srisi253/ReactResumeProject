import classes from './Profile.module.css';

const Profile = () => (
  <div className={classes.profileContainer}>
    <div className={classes.leftColumn}>
      <h2 className={classes.title}>Profile 👤</h2>
      <p>
        <strong>Graduate:</strong> Biotechnology Engineer at ORT University.
      </p>
      <p>
        <strong>Student:</strong> Information Technology Analyst at ORT University.
      </p>
      <p>Currently working in the Commerce Cloud area at Tata Consultancy Services.</p>
    </div>
  </div>
);

export default Profile;