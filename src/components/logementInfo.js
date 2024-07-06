import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements';

const LogementInfo = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <div className="logementPerso">
      <h2>{logement.title}</h2>
      <p className='zone'>{logement.location}</p>
      <div className='tags'>
        {logement.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default LogementInfo;