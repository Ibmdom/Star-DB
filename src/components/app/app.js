import React, {Component} from 'react';
import Header from '../header';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
// import PlanetDetails from '../planet-details';
// import StarshipDetails from '../starship-details'
import RandomPlanet from '../random-planets';
import ErrorBoundry from '../error-boundry';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    togglePlanet: true,
  }

  onTogglePlanet = (oldToggle) => {
    this.setState({
      togglePlanet: !oldToggle
    });
  }
  
  render() {
    const {togglePlanet} = this.state;
    const viewRandom = togglePlanet ? <RandomPlanet /> : null; 
    return (
    <div>
        <Header />
      <ErrorBoundry>
        {viewRandom}
      </ErrorBoundry>
      <button 
        className="toggle-planet btn btn-warning btn-lg"
        type='button' onClick={()=>this.onTogglePlanet(togglePlanet)}>
        Toggle Planet
      </button>
      <ErrorButton />
      <PeoplePage />
      <div className = "row mb2">
        <div className = "col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllPlanet}>
                    {(item) => {return <span>{item.name}
                    <button >!!</button></span>}}
          </ItemList>
         </div>
      </div>
      <div className = "row mb2">
        <div className = "col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllStarship}>
                    {(item) => item.name}
          </ItemList>
         </div>
      </div>
    </div>
    );
  }
};
