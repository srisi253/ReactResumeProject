import classes from './Languages.module.css';
import spainFlag from '../../../../images/espana.jpeg';
import uruguayanFlag from '../../../../images/uruguay.jpeg';
import britishFlag from '../../../../images/reinoUnido.png';
import usaFlag from '../../../../images/estadosUnidos.jpeg';
import portugalFlag from '../../../../images/portugal.png';
import brasilFlag from '../../../../images/brasil.png';
import reactIcon from '../../../../images/react.png';

const Languages = () => {
  return (
    <div className={classes.rightColumn}>
      <h2 className={classes.title}>Languages 📖</h2>
      <ul>
        <li><img src={spainFlag} alt="Spain flag" /> Spanish: Native <img src={uruguayanFlag} alt="Uruguayan flag" /></li>
        <li><img src={britishFlag} alt="British flag" /> English: Advanced <img src={usaFlag} alt="Spain flag" /></li>
        <li><img src={portugalFlag} alt="Spain flag" /> Portuguese: Basic <img src={brasilFlag} alt="Spain flag" /></li>
      </ul>
      <img src={reactIcon} alt="React icon" className={classes.reactIcon}/>
    </div>
  );
};

export default Languages;
