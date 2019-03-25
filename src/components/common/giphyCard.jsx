import React from "react";

const GiphyCard = ({ id, title, giphyUrl }) => {
  return (
    <div className="card" style={{ width: "18rem", float: "left" }}>
      <figure>
        <img src={giphyUrl} className="card-img-top" alt={id} />
      </figure>
      <div className="card-body">
        <h5 className="card-title">Title:</h5>
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

export default GiphyCard;
