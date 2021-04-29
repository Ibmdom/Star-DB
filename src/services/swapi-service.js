export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api';
  
  getResource = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`OOPPSS Could not fetch ${this._baseUrl}${url}, received ${res.status}`)
    }
    return await res.json(); //return body
  }
  
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map((el) => this._transformPeople(el)).slice(0, 5);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPeople(person);
  }

  getAllPlanet = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map((el) => this._transformPlanet(el)).slice(0, 5);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }  

  getAllStarship = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map((el) => this._transformStarship(el)).slice(0, 5);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }  

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
    id: this._extractId(planet),
    name: planet.name,
    diameter: planet.diameter,
    gravity: planet.gravity,
    orbitalPeriod: planet.orbital_period,
    population: planet.population,
    terrain: planet.terrain,
    climate: planet.climate,
    rotationPeriod: planet.rotation_period,
    }
  }

  _transformStarship = (starship) => {
    console.log(starship);
    return {
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPeople = (people) => {
    return {
    id: this._extractId(people),
    name: people.name,
    gender: people.gender,
    birthYear: people.birth_year,
    eyeColor: people.eye_color
    }
  }

} 

