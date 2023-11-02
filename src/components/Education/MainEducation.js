import { Link } from 'react-router-dom';
import classes from './MainEducation.module.css';

const my_education = [
  {
    id: '1',
    title: '🎓Biotechnology Engineer🎓',
    description: 'A biotechnology engineer is a highly specialized professional who combines knowledge of molecular biology and genetics with programming and bioinformatics skills. Their primary objective is to apply technology and informatics in the field of biology to research and develop innovative solutions in areas such as medicine, agriculture, and the food industry. These engineers use programming and bioinformatics tools to analyze genomic data, model biological processes, and design experiments, allowing them to make significant contributions to improving human health, food production, and environmental protection.',
    imageEducation: require('../../images/collegeDegreeHorizontal.png'),
    imageEducation2: require('../../images/bioInformatica.jpeg'),
    downloadLink: '/TesisBiotec.pdf',
  },
  {
    id: '2',
    title: '🧑‍💻Information Technology Analyst🧑‍💻',
    description: 'For over a year, starting in 2022, I dedicated myself to my academic pursuit in the field of Information Technology Analysis. During this period, I gained substantial knowledge in programming languages such as JavaScript, C#, HTML, CSS, and SQL. Throughout my study, I developed foundational skills in the technology and programming realm.',
    imageEducation: require('../../images/programmer.png'),
    imageEducation2: require('../../images/ortLogo.jpeg'),
    link: 'https://github.com/srisi253',
  },
  {
    id: '3',
    title: '🏅Salesforce Certifications🏅',
    description: 'The Salesforce B2C Commerce Developer credential is designed for those who have experience as full-stack developers for Salesforce Commerce Cloud Digital. The Salesforce Associate certification is designed for individuals who have a fundamental awareness of how an integrated CRM platform solves the challenge of connecting departments and customer data. Understanding reporting, user administration, sharing, customization, and data management at a foundational level is also beneficial.',
    imageEducation: require('../../images/commerceCloudCert.png'),
    imageEducation2: require('../../images/AssociateCert.png'),
    link: 'https://www.salesforce.com/trailblazer/srisi1',
  },
  {
    id: '4',
    title: '🖥️Udemy Courses🖥️',
    description: 'In this section, I want to share with you some of the Udemy courses I have completed that have enriched my set of skills and knowledge.',
    imageEducation: require('../../images/commerceCloudUdemy.jpeg'),
    imageEducation2: require('../../images/tableau.jpeg'),
  },
];

const MainEducation = () => (
  <ul className={classes.educationList}>
    {my_education.map((education) => (
      <li key={education.id}>
        <Link
          to={`/education/${encodeURIComponent(education.title)}`}
          state={{
            title: education.title,
            description: education.description,
            image: education.imageEducation,
            image2: education.imageEducation2,
            downloadLink: education.downloadLink,
            link: education.link,
          }}
          className={classes.educationItem}
        >
          <div className={classes.educationContent}>
            <span>{education.title}</span>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default MainEducation;
