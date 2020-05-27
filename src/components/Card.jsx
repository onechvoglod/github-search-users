import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Название карточки</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="#" className="btn btn-primary">
          Переход куда-нибудь
        </Link>
      </div>
    </div>
  );
};

export default Card;
