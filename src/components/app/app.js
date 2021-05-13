import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi-service';
import DemoSwapiService from '../../services/demo-swapi-service';
import RandomPlanet from '../random-planets';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../sw-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import './app.css';

export default class App extends Component {

  state = {
    // togglePlanet: true,
    // itemId: null, //'1', 
    swapiService: new SwapiService(),
  }

  onToggleDemo = () => {
    this.setState(({ swapiService }) => {
      const swService = swapiService instanceof DemoSwapiService
        ? SwapiService
        : DemoSwapiService;
      return { swapiService: new swService() };
    })
  }

  render() {
    const { swapiService } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={swapiService}>
          <div>
            <Header onToggleDemo={(swapiService) => { this.onToggleDemo(swapiService) }} />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
