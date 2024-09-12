import React from "react";

import './card.css'

const Card = ({title,description,name,dateStart,dateEnd}) => {
    return (
        <div class = "cardName">
            <h1 class = "cardTitle">{title}</h1>
            <p class = "cardDescription">{description}</p>
            <h2 class = "cardPerson">{name}</h2>
            <h3 class = "cardDateI">{dateStart}</h3>
            <h3 class = "cardDateF">{dateEnd}</h3>
        </div>
    );
};

export default Card;
