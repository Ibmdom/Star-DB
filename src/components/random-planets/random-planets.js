import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service'
import Spiner from '../spinner'

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
    // id: 2, 
    // name: null,
    // population: null,
    // rotationPeriod: null,
    // diameter: null
  } 
  onLoadPlanet = (planet) => {
    this.setState({
      planet, 
      loading: false});
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*15) + 2;
    this.swapiService.getPlanet(id)
    .then((res) => {
      // console.log("UpPl", res)
      this.onLoadPlanet(res);
    })
  }


  render() {
    const {
      planet: {id = 2, name, population, rotationPeriod, diameter},
      loading } = this.state;
    
    if (loading) { 
      return Spiner();
    }

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
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
      </div>

    );
  }
}

