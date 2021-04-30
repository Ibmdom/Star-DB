import React, {Component} from 'react';
import Header from '../header';
import ItemDetails, {Record} from '../item-details';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
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
    itemId: null, //'1', 
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
      <ItemDetails itemId={itemId} 
        getData={getPerson}
        getImgUrl={getImgPerson}>
        <Record field="gender" label="Gender:" />
        <Record field="birthYear" label="Birth Year:" />
        <Record field="eyeColor" label="Eye Color:" />
      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails itemId={'5'} 
        getData={getPlanet}
        getImgUrl={getImgPlanet}>

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={'10'} 
        getData={getStarship}
        getImgUrl={getImgStarship}>
        <Record field="model" label="Model:" />
        <Record field="manufacturer" label="Manufacturer:" />
        <Record field="length" label="Length:" />
        <Record field="passengers" label="Passengers:" />
      </ItemDetails>
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

      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>      

      {/* <ErrorBoundry>
        <Row left={<ItemList onItemSelected={this.onPersonSelected} 
                    getData={getAllPlanet}>
                    {(item) => {return <span>{item.name}</span>}}
                    </ItemList>} 
             right={planetDetails} 
        />
      </ErrorBoundry>       */}
      <ErrorBoundry>
        <Row left={<ItemList onItemSelected={this.onPersonSelected} 
                    getData={getAllStarship}>
                    {(item) => item.name}
                  </ItemList>}
             right={starshipDetails} />
      </ErrorBoundry>      
    </div>
    );
  }
};
