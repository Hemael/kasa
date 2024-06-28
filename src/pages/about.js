import "../sass/main.css";
import React, { useState } from "react";
import banniereProp from '../datas/banniereProp.png';
import aboutList from "../datas/aboutList";
import arrow from "../datas/arrowback.svg";

const About = () => {
  const [showParagraph, setShowParagraph] = useState({});
  const [arrowState, setArrowState] = useState(
    aboutList.reduce((acc, _, id) => ({ ...acc, [id]: false }), {})
  );
  const [initialClickState, setInitialClickState] = useState({});
  const [animationState, setAnimationState] = useState({});

const handleTitleClick = (id) => {
  setInitialClickState((prevInitialClickState) => ({
    ...prevInitialClickState,
    [id]: true
  }));

  setArrowState((prevArrowState) => ({
    ...prevArrowState,
    [id]: !prevArrowState[id]
  }));

  if (!showParagraph[id]) {
    setShowParagraph((prevShowParagraph) => ({
      ...prevShowParagraph,
      [id]: true
    }));
    setAnimationState((prevAnimationState) => ({ ...prevAnimationState, [id]: undefined }));
  } else {
    setAnimationState((prevAnimationState) => ({
      ...prevAnimationState,
      [id]: 'out'
    }));
    setTimeout(() => {
      setShowParagraph((prevShowParagraph) => ({
        ...prevShowParagraph,
        [id]: false
      }));
    }, 500);
  }
};

  return (
    <div className="about">
      <div className="banniere">
        <img src={banniereProp} alt="img montagne" className="banniereImg"/> 
      </div>

      <div className="boxCrit">
        {aboutList.map((about, id) => (
          <div key={id} className="aboutList">
            <div className="groupAbout">
              <h2 className="title">{about.title}</h2>
              <img 
                src={arrow} 
                alt="arrow" 
                onClick={() => handleTitleClick(id)} 
                className={`arrow ${initialClickState[id] ? (arrowState[id] ? 'rotate-90-cw' : 'rotate-90-ccw') : ''}`} 
                style={{ transform: arrowState[id] ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </div>

            {showParagraph[id] && (
              <p className={`content ${animationState[id] === 'out' ? 'scale-out-ver-top' : 'scale-in-ver-top'}`}>
                {about.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;