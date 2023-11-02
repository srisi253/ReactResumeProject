import { useLocation } from 'react-router-dom';
import './styles.css'; // Importa el archivo CSS

const ExperienceDetailsPage = () => {
  const location = useLocation();
  const { title, description, image } = location.state;

  return (
    <div>
      <h1 className="titleStyleExperience">{title}</h1>
      <p className={window.innerWidth <= 768 ? 'mobileStylesExperience' : null}>{description}</p>
      <div className={window.innerWidth <= 768 ? 'mobileStylesExperience' : 'imageContainerStyleExperience'}>
        <img src={image} alt="Imagen de experience" className="imageSizeExperience" />
      </div>
    </div>
  );
}

export default ExperienceDetailsPage;

