import {Link} from 'react-router-dom';
import classes from './MainExperience.module.css'

const my_experience = [
    {
        id: '1',
        title: '🧑🏼‍💻Commerce Cloud at TCS🧑🏼‍💻',
        description: 'As a Salesforce Commerce Cloud developer at Tata Consultancy Services, I am responsible for configuring and customizing our e-commerce platform to deliver exceptional shopping experiences. I use my skills in React, JavaScript, HTML, CSS, Business Manager to create effective technical solutions that improve the user experience and optimize site performance. I work closely with our marketing and sales team to ensure the alignment of our business and technical strategies. My ability to solve problems and my focus on continuous improvement have contributed to the success of our e-commerce site.',
        imageExperience: require('../../images/commerceCloud.png'),
    },
    {
        id: '2',
        title: '🌐Web Developer at Nooka Labs🌐',
        description: 'At Nooka Labs, I had the opportunity to work diligently on multiple e-commerce projects for a period of 7 months, where I gained extensive experience with the Shopify platform. Some of the projects I participated in include Deeppurpleproject, La Oriental, and Mashkady. Additionally, I made significant contributions to the GeoCom website using React, making improvements and changes to enhance user experience and site performance. This work also involved utilizing GitLab for version control and collaborating with the deployment process in Jenkins. This experience allowed me to further develop my technical skills and provide effective solutions to the challenges that arose in each project',
        imageExperience: require('../../images/nooka.jpeg'),
    },
    {
        id: '3',
        title: '💉Head of bacterial antigens production, biosafety level 3, Microsules Laboratory💉',
        description: 'I was promoted to the position of Supervisor, where I took on a leadership and supervisory role. In this capacity, I was responsible for a team of professionals and technicians, whom I guided and directed in the process of bacterial growth until their inactivation, used for the production of vaccines and veterinary kits. My responsibilities also included managing detailed documentation for each batch produced, ensuring that quality and safety standards were met. I maintained close coordination and constant collaboration with the Quality Control team to ensure that our products complied with required regulations and standards.',
        imageExperience: require('../../images/bioseguridad3.jpeg'),
    },
    {
        id: '4',
        title: '🧑‍🔬Assistant Technician in Bacterial Antigen Production at Microsules Laboratory🧑‍🔬',
        description: '"I worked in the bacteria production sector, where my responsibilities covered a wide range of tasks. I was in charge of preparing materials and equipment for industrial processes, supervising the growth of bacteria cultures and managing the inactivation of bacterial strains. One of my key roles was coordinating closely with the Quality Assurance team to ensure that our products met strict quality standards. I meticulously maintained daily documentation of the entire production process, making sure the records were accurate and up to date. This comprehensive approach helped ensure the quality and consistency of our bacterial products.',
        imageExperience: require('../../images/labIndustria.jpeg'),
    },
    {
        id: '5',
        title: '🌿Internship, Biofuels Area at LATU🌿',
        description: '"I completed a 3-month internship at Latitude, focusing on the field of biofuels. During this internship, I was actively involved in two projects that explored the use of a vapor explosion method for both sorghum and eucalyptus. Our main objective was to evaluate The performance of biofuel products under various conditions of temperature and pressure. On these projects, I had the opportunity to work with a dedicated team and together we conducted experiments to assess the effectiveness of the steam explosion process. We carefully measure and analyze the yields of the resulting product, taking into account the different variables involved. This hands-on experience allowed me to gain valuable insights into biofuel production processes and broaden my knowledge in the field."',
        imageExperience: require('../../images/biocombustible.jpeg'),
    },
    {
        id: '6',
        title: '🧪Schollarship holder + Assistant professor, ORT University🧪',
        description: 'I was awarded a scholarship for a project titled "Recombinant Production of Botulinum Toxin", which spanned one year and served as a crucial component of my Bachelors thesis in Biotechnology Engineering. Throughout this project, I played a multifaceted role, involving extensive research, experimental design, hands-on experimentation, data analysis, and meticulous documentation. During a one month period, I also had the opportunity to serve as a teaching assistant for the Cellular Biology Laboratory course. In this role, I prepared materials, collaborated closely with the professor to facilitate lectures, and provided guidance and assistance to students as they conducted various laboratory experiments. This experience allowed me to further develop my teaching and communication skills while supporting the learning journey of fellow students.',
        imageExperience: require('../../images/scholarship.jpeg'),
    }
]


const MainExperience = () => (
  <ul className={classes.experienceList}>
    {my_experience.map((experience) => (
      <li key={experience.id}>
        <Link
          to={`/experience/${encodeURIComponent(experience.title)}`}
          state={{
            title: experience.title,
            description: experience.description,
            image: experience.imageExperience,
          }}
          className={classes.experienceItem}
        >
          <div className={classes.experienceContent}>
            <span>{experience.title}</span>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default MainExperience;