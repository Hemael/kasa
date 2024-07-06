// about.js
import React from "react";
import banniereProp from '../datas/banniereProp.png';
import Collapse from '../components/collapse';
import aboutList from '../datas/aboutList';

const About = () => {
  return (
    <div className="about">
      <div className="banniere">
        <img src={banniereProp} alt="img montagne" className="banniereImg"/> 
      </div>
      <Collapse
        items={aboutList}
        renderHeader={(item) => <h2>{item.title}</h2>}
        renderItem={(item) => <p>{item.content}</p>}
      />
    </div>
  );
};

export default About;