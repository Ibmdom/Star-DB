import React from 'react';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
// import PlanetDetails from '../planet-details';
// import StarshipDetails from '../starship-details'
import RandomPlanet from '../random-planets';
import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className = "row mb2">
        <div className = "col-md-6">
          <ItemList />
        </div>
        <div className = "col-md-6">
          <PersonDetails />
        </div>  
      </div>
      {/* <PlanetDetails />
      <StarshipDetails /> */}
    </div>
  );
};

export default App;