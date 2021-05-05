import React, {Component} from 'react';
import Header from '../header';
// import ItemDetails, {Record} from '../item-details';
// import ErrorButton from '../error-button';
// import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planets';
import ErrorBoundry from '../error-boundry';
import {SwapiServiceProvider, SwapiServiceConsumer} from '../sw-service-context';

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
    const { togglePlanet, itemId } = this.state;
    const viewRandom = togglePlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div>
            <Header />
            {/* {viewRandom} */}
            <button
              className="toggle-planet btn btn-warning btn-lg"
              type='button' onClick={() => this.onTogglePlanet(togglePlanet)}>
              Toggle Planet
            </button>
            <Row left={
              <PersonList onItemSelected={this.onItemSelected} />
            } right={
              <PersonDetails itemId={1} />
            } />
            <Row left={
              <PlanetList />
            } right={
              <PlanetDetails itemId={4} />
            } />
            <Row left={
              <StarshipList />
            } right={
              <StarshipDetails itemId={10} />
            } />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
