import "../sass/main.css";
import React, { useEffect, useState } from 'react';
import starG from "../datas/etoileG.svg";
import starR from "../datas/etoileR.svg";

const Ratings = (props) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        console.log(props.number);
        const stars_ = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= props.number) {
                stars_.push(<img alt="etoile rouge" src={starR} key={i} />);
            } else {
                stars_.push(<img alt="etoile grise" src={starG} key={i} />);
            }
        }
        setStars(stars_);
    }, [props.number]);

    return (
        <div className="starBox">
            {stars.map((star, i) => (
                <div className="starContent" key={i}> {star} </div>
            ))}
        </div>
    );
}

export default Ratings;
