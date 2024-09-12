import React from "react";
import './children.css';

const ChildCard = ({ children }) => {
    return (
        <div className="childCardName">
            {children}
        </div>
    );
};

export default ChildCard;