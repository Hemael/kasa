import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logements from '../datas/logements';
import Collapse from '../components/collapse';
import Ratings from '../components/rating';
import SlideShow from '../components/slideShow';

const LogementInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logement_ = logements.find((item) => item.id === id);
    if (!logement_) {
      navigate("/logement-non-trouve");
    } else {
      setLogement(logement_);
    }
  }, [id, navigate]);

  if (!logement) {
    return null; 
  }

  return (
    <div className="logementPerso">
      <SlideShow />
      <div className='placement'>
        <div className='des'>
          <div className='nameLoc'>
            <h2>{logement?.title}</h2>
            <p className='zone'>{logement?.location}</p>
          </div>


          <div className='tagRac'>

            <div className='tags'>
              {logement?.tags?.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>

        </div>

        <div className='racName'>

        <div className='host'>
          <p>{logement?.host?.name}</p>
          <img src={logement?.host?.picture} alt={logement?.host?.name} />
        </div>

          {logement && logement.rating && (
            <Ratings number={logement?.rating} />
          )}

        </div>
      </div>
      

      <div className='box'>
        <Collapse
          items={[logement]}
          renderHeader={() => <h2>Description</h2>}
          renderItem={(item) => <p className='descrip'>{item.description}</p>}
        />

        <Collapse
          items={[logement]}
          renderHeader={() => <h2>Equipements</h2>}
          renderItem={(item) => (
            <div className='descrip'>
              {item.equipments.map((equip, index) => (
                <p key={index}>{equip}</p>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default LogementInfo;
