import React from 'react';
import Loader from "./Loader";
import RoomCard from "./RoomCard";

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
            {rooms.map(room => <RoomCard key={room.id} room={room} className="Card"/>)}
          </div>
      }
    </>
  );
};

export default RoomsList;
