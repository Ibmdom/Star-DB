import React, {Component} from 'react';
import Header from '../header';
import ItemDetails, {Record} from '../item-details';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planets';
import ErrorBoundry from '../error-boundry';
import {ViewList} from '../hoc-helpers';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList 
 } from '../sw-components';

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
    // const {getAllPeople, getPerson, getImgPerson,
    //        getAllPlanet, getPlanet, getImgPlanet,
    //        getAllStarship, getStarship, getImgStarship} = this.swapiService;

    // const itemList = (ViewList( 
    //   <ItemList 
    //   onItemSelected={this.onItemSelected} 
    //   // getData={getAllPeople}
    //   >
    //   {(e) => `${e.name} (${e.birthYear})`}
    //   </ItemList>, getAllPeople)

    // );

    // const itemList = (
    //   <ItemList 
    //   onItemSelected={this.onItemSelected} 
    //   getData={getAllPeople}
    //   >
    //   {(e) => `${e.name} (${e.birthYear})`}
    //   </ItemList>
    // );
 
    // const personDetails = (
    //   <ItemDetails itemId={itemId} 
    //     getData={getPerson}
    //     getImgUrl={getImgPerson}>
    //     <Record field="gender" label="Gender:" />
    //     <Record field="birthYear" label="Birth Year:" />
    //     <Record field="eyeColor" label="Eye Color:" />
    //   </ItemDetails>
    // );

    // const planetDetails = (
    //   <ItemDetails itemId={'5'} 
    //     getData={getPlanet}
    //     getImgUrl={getImgPlanet}>

    //   </ItemDetails>
    // );

    // const starshipDetails = (
    //   <ItemDetails itemId={'10'} 
    //     getData={getStarship}
    //     getImgUrl={getImgStarship}>
    //     <Record field="model" label="Model:" />
    //     <Record field="manufacturer" label="Manufacturer:" />
    //     <Record field="length" label="Length:" />
    //     <Record field="passengers" label="Passengers:" />
    //   </ItemDetails>
    // );
    //  console.log(PersonList);  
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
        <Row left={
          <PersonList onItemSelected={this.onItemSelected} />
        } right={
          <PersonDetails itemId = {1} />
          } />
        <Row left={
          <PlanetList />
        } right={
          <PlanetDetails itemId = {4} />
          } />
        <Row left={
          <StarshipList />
        } right={
          <StarshipDetails itemId = {10} />
          } />

      </ErrorBoundry>      

    </div>
    );
  }
};
