import React from "react";

export const Cards = ({title='card-title', subtitle='Lorem ipsum', label='Find Out More!', image='https://placehold.co/500x325'}) => {
    
const valores = [1, 2, 3, 4];

return (
    <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {valores.map((valor, index) => (
        <div className="card" style={{ width: "18rem", margin: '10px' }} key={index}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <a href="#" className="btn btn-primary">{label}</a>
          </div>
        </div>
      ))}
    </div>
  );
};