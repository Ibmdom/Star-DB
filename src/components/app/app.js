import React, {Component} from 'react';
import Header from '../header';
import ItemDetails from '../item-details';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
// import PlanetDetails from '../planet-details';
// import StarshipDetails from '../starship-details'
import RandomPlanet from '../random-planets';
import ErrorBoundry from '../error-boundry';

import './app.css';

const Row = ({left, right}) => {
  return (
    <div className = "row mb2">
      <div className = "col-md-6">
        {left}
      </div>
      <div className = "col-md-6">
        {right}
      </div>  
    </div>
  )
}

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    togglePlanet: true,
    itemId: '1', 
  }
  
  onItemSelected = (id) => {
    this.setState({
      itemId: id
    })
  }

  onTogglePlanet = (oldToggle) => {
    this.setState({
      togglePlanet: !oldToggle
    });
  }
  
  render() {
    const {togglePlanet, itemId} = this.state;
    const viewRandom = togglePlanet ? <RandomPlanet /> : null; 
    const {getAllPeople, getPerson, getImgPerson,
           getAllPlanet, getPlanet, getImgPlanet,
           getAllStarship, getStarship, getImgStarship} = this.swapiService;

    const itemList = (
      <ItemList 
      onItemSelected={this.onItemSelected} 
      getData={getAllPeople}
      >
      {(e) => `${e.name} (${e.birthYear})`}
      </ItemList>
    );
 
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={itemId} 
            getData={() => getPerson(itemId)}
            getImgUrl={getImgPerson}
            />
      </ErrorBoundry>
        );

    return (
    <div>
        <Header />
        {/* {viewRandom} */}
      <button 
        className="toggle-planet btn btn-warning btn-lg"
        type='button' onClick={()=>this.onTogglePlanet(togglePlanet)}>
        Toggle Planet
      </button>
      <ErrorButton />

      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>      

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
