import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements';
import Collapse from '../components/collapse';

const LogementInfo = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  return (
    <div className="logementPerso">
      <div className='des'>
        <div className='nameLoc'>
        <h2>{logement.title}</h2>
        <p className='zone'>{logement.location}</p>
        </div>

        <div className='host'>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>



      <div className='tags'>
        {logement.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      








      <div className='box'>

        <Collapse
          items={[logement]} 
          renderHeader={() => <h2>Description</h2>}
          renderItem={(item) => <p className='descrip'>{item.description}</p>}
        />

        <Collapse
          items={[logement]} // Pass an array with a single object
          renderHeader={() => <h2>Equipements</h2>}
          renderItem={(item) => (
            <div className='descrip'>
              {item.equipments.map((equip, index) => (<p key={index} >{equip}</p>))}
            </div>
          )}/>

      </div>

    </div>
  );
};
export default LogementInfo;