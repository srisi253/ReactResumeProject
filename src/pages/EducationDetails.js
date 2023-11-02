import { useLocation } from 'react-router-dom';
import './styles.css'; // Agrega el archivo CSS de estilos

function EducationDetails() {
  const location = useLocation();
  const { title, description, image, image2, downloadLink, link } = location.state;

  const imageSizeEducation = {
    width: '31.25rem',
    height: '14.38rem',
    marginTop: '1.88rem',
  };

  const image2StyleEducation = {
    width: '31.25rem',
    height: '14.38rem',
    marginLeft: '1.25rem',
  };

  const titleStyleEducation = {
    textAlign: 'center',
    color: '#008080',
    padding: '1rem',
  };

  const mobileStylesEducation = {
    fontSize: '1rem',
    maxWidth: '90%',
    margin: '0 auto',
    marginTop: '1.25rem',
    padding: '2% 5% 5% 5%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'justify',
  };

  const mobileTitleStyles = {
    fontSize: '1.2rem',
  };

  return (
    <div>
      <h1
        style={{
          ...titleStyleEducation,
          ...(window.innerWidth <= 768 ? mobileTitleStyles : {}),
        }}
      >
        {title}
      </h1>
      <p
        dangerouslySetInnerHTML={{ __html: description }}
        style={window.innerWidth <= 768 ? mobileStylesEducation : null}
      />
      {downloadLink && (
        <p>
          Download my thesis project,{' '}
          <a href={downloadLink} download>
            click here!
          </a>
        </p>
      )}
      {link && (
        <p>
          {title === 'Biotechnology Engineer'
            ? `For more details about my biotechnology work, `
            : title === '🏅Salesforce Certifications🏅'
            ? `Check out my Salesforce profile `
            : `Check out my portfolio, `}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title === 'Biotechnology Engineer' ? 'click here!' : 'click here!'}.
          </a>
        </p>
      )}
      {window.innerWidth <= 768 ? (
        <div>
          <img src={image} alt="Education Image1" style={mobileStylesEducation} />
          <img src={image2} alt="Education Image2" style={mobileStylesEducation} />
        </div>
      ) : (
        <div className="imageContainerStyle">
          <img src={image} alt="Education Image1" style={imageSizeEducation} />
          <img src={image2} alt="Education Image2" style={image2StyleEducation} />
        </div>
      )}
    </div>
  );
}

export default EducationDetails;
