import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planets.css';

export default class RandomPlanet extends Component {
  constructor (){
    super();
    this.updatePlanet();
    // this.updatePlanet = setInterval(() => this.updatePlanet(),3000);
  }
  
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  } 

  onLoadPlanet = (planet) => {
    this.setState({
      planet, 
      loading: false});
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
    }

  updatePlanet() {
    const id = 12000;
    // const id = Math.floor(Math.random()*15) + 2;
    this.swapiService.getPlanet(id)
    .then(this.onLoadPlanet) // the same as below
    // .then((res) => {
    //   this.onLoadPlanet(res);
    // })
    .catch(this.onError)
  }

  render() {
    const {planet, loading, error } = this.state;
    const notError = !error && !loading; // !(error || loading)
    const viewError = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const viewPlanet = notError ? <ViewPlanet planet = {planet}/> : null;


    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {viewPlanet}
        {viewError}
      </div>

    );
  }
}

const ViewPlanet = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  
  return (
   <React.Fragment>
        <img className="planet-image" 
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
          alt = 'Planet'/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
   </React.Fragment>)
}
