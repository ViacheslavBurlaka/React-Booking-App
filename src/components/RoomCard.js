import React from 'react';

const RoomCard = ({room}) => {
  const {name, type, price, capacity, size, description, pets, breakfast} = room;
  return (
    <div className="Card">
      <div className="Card__row"><strong>{name.toUpperCase()}</strong></div>
      <div className="Card__row"><span>Type</span> <strong>{type}</strong></div>
      <div className="Card__row"><span>Price</span> <strong>{price}$</strong></div>
      <div className="Card__row"><span>Capacity</span> <strong>{capacity}</strong></div>
      <div className="Card__row"><span>Size</span> <strong>{size}</strong></div>
      <div className="Card__row"><span>Breakfast</span>
        <strong>{breakfast ? '+++' : '---'}</strong></div>
      <div className="Card__row"><span>Pets</span>
        <strong>{pets ? '+++' : '---'}</strong>
      </div>
      <p className="Card__text">{description}</p>
    </div>
  );
};

export default RoomCard;
