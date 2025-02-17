import logements from '../datas/logements';
import { Link } from 'react-router-dom';

const LogementsList = () => {
  return (
    <div className="boxLogements">
      {logements.map((logement, id) => (
  
        <Link key={id} to={`/logement/${logement.id}`}>

          <div  className="logement">
            <img src={logement.cover} alt={logement.title} className="picture"/>
            <h2 className="title">{logement.title}</h2>
          </div>
          
        </Link>

      ))}
    </div>
  );
};

export default LogementsList;