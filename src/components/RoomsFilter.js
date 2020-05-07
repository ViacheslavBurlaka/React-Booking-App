import React from 'react';
import Loader from "./Loader";

const RoomsFilter = ({data, handleChange, loading}) => {

  const {
    rooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = data;

  // Get unique values
  const getUniqueValue = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
  }
  // Types
  let types = getUniqueValue(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  });

  // Guests
  let guests = getUniqueValue(rooms, 'capacity');
  guests = [...guests];
  guests = guests.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  });


  return (
    <>
      <h2>Filter:</h2>
      {
        loading
          ?
          <Loader/>
          :
          <>
            <div className="Section">
              <div className="cell">
                <label htmlFor="type">Room type:</label>
              </div>
              <div className="cell">
                <select
                  id="type"
                  value={type}
                  name="type"
                  onChange={handleChange}
                >
                  {types}
                </select>
              </div>
            </div>
            <div className="Section">
              <div className="cell">
                <label htmlFor="guests">Guests:</label>
              </div>
              <div className="cell">
                <select
                  id="guests"
                  value={capacity}
                  name="capacity"
                  onChange={handleChange}
                >
                  {guests}
                </select>
              </div>
            </div>
            <div className="Section">
              <div className="cell">Price:</div>
              <div className="cell">
                <input type="range" id="price" name="price" min={minPrice} max={maxPrice}
                       value={price}
                       step={50}
                       onChange={handleChange}/>
                <label htmlFor="price">{price}$</label>

              </div>
            </div>
            <div className="Section">
              <div className="cell"><label htmlFor="size">Room size:</label></div>
              <div className="cell">
                <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange}/>
                <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange}/>
              </div>
            </div>
            <div className="Section">
              <div className="cell">Extras:</div>
              <div className="cell">
                <label htmlFor="breakfast">breakfast:</label>
                <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}
                       onChange={handleChange}/>

                <label htmlFor="pets">pets:</label>
                <input type="checkbox" name="pets" id="pets" checked={pets}
                       onChange={handleChange}/>
              </div>
            </div>
          </>
      }
    </>
  );
};

export default RoomsFilter;
