import ContactForm from './ContactForm/ContactForm';
import classes from './Skills.module.css';
import Languages from './Languages/Languages';
import TechnologyKnowledge from './TechnologyKnowledge/TechnologyKnowledge';

const Skills = () => {
  const shouldStack = window.innerWidth <= 768;

  return (
    <>
      <div className={`${classes.container} ${shouldStack ? classes.stacked : ''}`}>
        <TechnologyKnowledge />
        <Languages />
        <ContactForm />
      </div>
    </>
  );
};

export default Skills;

