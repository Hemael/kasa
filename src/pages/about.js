// about.js
import React from "react";
import banniereProp from '../datas/banniereProp.png';
import Collapse from '../components/collapse';
import aboutList from '../datas/aboutList';
import Banniere from '../components/banniere';

const About = () => {
  return (
    <div className="about">
      <Banniere showText={false} image={banniereProp} />
      <Collapse
        items={aboutList}
        renderHeader={(item) => <h2>{item.title}</h2>}
        renderItem={(item) => <p>{item.content}</p>}
      />
    </div>
  );
};

export default About;