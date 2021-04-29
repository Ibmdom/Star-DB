import React, {Component} from 'react';
import Header from '../header';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
// import PlanetDetails from '../planet-details';
// import StarshipDetails from '../starship-details'
import RandomPlanet from '../random-planets';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    togglePlanet: true,
    hasError: false
  }

  onTogglePlanet = (oldToggle) => {
    this.setState({
      togglePlanet: !oldToggle
    });
  }
  
  componentDidCatch(){
    this.setState({hasError: true});
  }
    
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const {togglePlanet} = this.state;
    const viewRandom = togglePlanet ? <RandomPlanet /> : null; 
    return (
    <div>
      <Header />
      {viewRandom}
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
                    getData={this.swapiService.getAllPlanet}
                    renderItem={(item) => {return <span>{item.name}
                    <button >!!</button></span>}
                    }/>
         </div>
      </div>
      <div className = "row mb2">
        <div className = "col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} 
                    getData={this.swapiService.getAllStarship}
                    renderItem={(item) => item.name}/>
         </div>
      </div>
    </div>
    );
  }
};
