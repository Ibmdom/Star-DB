export default class SwapiService {
  _baseUrl = 'https://swapi.dev/api';
  
  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    // console.log(`${this._baseUrl}${url}`, res);
    if (!res.ok) {
      throw new Error(`OOPPSS Could not fetch ${this._baseUrl}${url}, received ${res.status}`)
    }
    return await res.json(); //return body
  }
  
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map((el) => this._transformPeople(el));
    // return await this.getResource(`/people/`);
  }

  async getPerson(id) {
    return await this.getResource(`/people/${id}/`);
  }

  async getAllPlanet() {
    const res = await this.getResource(`/planets/`);
    return res.results.map((el) => this._transformPlanet(el));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }  

  async getAllStarship() {
    const res = await this.getResource(`/starships/`);
    return res.results.map((el) => this._transformStarship(el));
  }

  async getStarship(id) {
    return await this.getResource(`/starships/${id}/`);
  }  

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    // console.log(item);
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter
    }
  }

  _transformStarship(starship) {
    return {
    id: this._extractId(starship),
    name: starship.name
    // population: planet.population,
    // rotationPeriod: planet.rotation_period,
    // diameter: planet.diameter
    }
  }

  _transformPeople(people) {
    return {
    id: this._extractId(people),
    name: people.name
    // population: planet.population,
    // rotationPeriod: planet.rotation_period,
    // diameter: planet.diameter
    }
  }

} 

