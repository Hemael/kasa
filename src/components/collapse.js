import React, { useState } from 'react';
import arrow from '../datas/arrowback.svg';
import "../sass/main.css";

const Collapse = ({
  items,
  renderItem,
  renderHeader,
}) => {
  const [showItem, setShowItem] = useState({});
  const [arrowState, setArrowState] = useState(
    items.reduce((acc, _, id) => ({ ...acc, [id]: false }), {})
  );
  const [initialClickState, setInitialClickState] = useState({});
  const [animationState, setAnimationState] = useState({});

  const handleItemClick = (id) => {
    setInitialClickState((prevInitialClickState) => ({
      ...prevInitialClickState,
      [id]: true
    }));

    setArrowState((prevArrowState) => ({
      ...prevArrowState,
      [id]: !prevArrowState[id]
    }));

    if (!showItem[id]) {
      setShowItem((prevShowItem) => ({
        ...prevShowItem,
        [id]: true
      }));
      setAnimationState((prevAnimationState) => ({ ...prevAnimationState, [id]: undefined }));
    } else {
      setAnimationState((prevAnimationState) => ({
        ...prevAnimationState,
        [id]: 'out'
      }));
      setTimeout(() => {
        setShowItem((prevShowItem) => ({
          ...prevShowItem,
          [id]: false
        }));
      }, 500);
    }
  };

  return (
    <div className="boxCrit">
      {items.map((item, id) => (
        <div key={id} className="aboutList">
          <div className="groupAbout">
            {renderHeader(item, id)}
            <img 
              src={arrow} 
              alt="arrow" 
              onClick={() => handleItemClick(id)} 
              className={`arrow ${initialClickState[id] ? (arrowState[id] ? 'rotate-90-cw' : 'rotate-90-ccw') : ''}`} 
              style={{ transform: arrowState[id] ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>

          {showItem[id] && (
            <div className={`content ${animationState[id] === 'out' ? 'scale-out-ver-top' : 'scale-in-ver-top'}`}>
              {renderItem(item, id)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;