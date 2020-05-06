import React, {useEffect, useState} from 'react';
import './App.css';
// import mockData from './assets/data';
import RoomsList from "./components/RoomsList";
import RoomsFilter from "./components/RoomsFilter";
import {formatData} from "./utils/formatData";
import {getData} from "./utils/getData";

const App = () => {
  const initialState = {
    rooms: [],
    filteredRooms: [],
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  }
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(true);

  // Inits after data have been received
  useEffect(() => {
    getData()
      .then((response) => {
        const rooms = formatData(response.items);
        const maxPrice = Math.max(...rooms.map(item => item.price));
        const maxSize = Math.max(...rooms.map(item => item.size));

        setState(prevState => ({
          ...prevState,
          rooms: rooms,
          filteredRooms: rooms,
          price: maxPrice,
          maxPrice: maxPrice,
          maxSize: maxSize
        }));

        // data have been loaded => changes loading to false
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  // Handler for filter
  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  let {
    rooms,
    filteredRooms,
    type,
    capacity,
    price,
    minSize,
    maxSize,
    breakfast,
    pets
  } = state;


  // Filters rooms when one of the dependency will changes
  useEffect(() => {
    let tempRooms = [...rooms];

    // filter by type
    if (type !== "all") {
      tempRooms = rooms.filter(room => room.type === type)
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast)
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets)
    }

    // change state
    setState(prevState => ({
      ...prevState,
      capacity: parseInt(capacity),
      filteredRooms: tempRooms
    }))
  }, [rooms, type, capacity, price, breakfast, pets, minSize, maxSize]);

  return (
    <div className="App">
      <RoomsFilter handleChange={handleChange} data={state} loading={loading}/>
      <RoomsList rooms={filteredRooms} loading={loading}/>
    </div>
  );
}

export default App;
