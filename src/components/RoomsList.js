import React from 'react';
import Loader from "./Loader";

const RoomsList = ({rooms, loading}) => {
  return (
    <>
      <h2>List of rooms:</h2>
      {
        loading
          ?
          <Loader/>
          :
          <div className="RoomsList">
            {rooms.map(room => {
              const {type, price, capacity, size, description, pets, breakfast} = room;

              return (
                <div key={room.id} className="Card">
                  <div className="Card__row"><span>Type</span> <strong>{type}</strong></div>
                  <div className="Card__row"><span>Price</span> <strong>{price}$</strong></div>
                  <div className="Card__row"><span>Capacity</span> <strong>{capacity}</strong></div>
                  <div className="Card__row"><span>Size</span> <strong>{size}</strong></div>
                  <div className="Card__row"><span>Breakfast</span>
                    <strong>{breakfast ? '+++' : '-- -'}</strong></div>
                  <div className="Card__row"><span>Pets</span>
                    <strong>{pets ? '+++' : '---'}</strong>
                  </div>

                  <p className="Card__text">{description}</p>
                </div>
              )
            })}
          </div>
      }
    </>
  );
};

export default RoomsList;
