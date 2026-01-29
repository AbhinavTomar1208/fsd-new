import React from "react";
import "./card.css";
function Card(props){
    return(
        <div className="card">
            <img src={props.imgsrc} alt="card img" className="card-img"/>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
        </div>
    )
}
export default Card;