import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements';

const SlideShow = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return <div>Aucun logement trouvé</div>;
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % logement.pictures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  return (
    <div className="caroussel">
      <img src={logement.pictures[currentIndex]} alt={logement.title} />
      <div className='boutonDir'>
        <button onClick={handlePrev} className='precedent'> ‹ </button>
        <button onClick={handleNext} className='suivant'> › </button>
      </div>
      <div className='compteur'>
        {currentIndex + 1}/{logement.pictures.length}
      </div>
    </div>
  );
};

export default SlideShow;