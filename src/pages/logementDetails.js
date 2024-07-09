// pages/logementDetails.js
import React from 'react';
import LogementInfo from '../components/logementInfo';
import SlideShow from '../components/slideShow';
import logement from '../datas/logements';
import Collapse from '../components/collapse';






const LogementDetails = () => {

  return (
    <div>
    <SlideShow/>
    <LogementInfo />
    </div>
  );
};

export default LogementDetails;