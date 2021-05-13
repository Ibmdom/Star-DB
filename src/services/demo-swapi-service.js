export default class DemoSwapiService {

  getImgPerson = (id) => {
    return `./img/2.jpg`;
  }
  
  getImgPlanet = (id) => {
    return `./6.jpg`;
  }

  getImgStarship = (id) => {
    return `http://localhost:3000/12.jpg`;
  }

  getResource = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`OOPPSS Could not fetch ${this._baseUrl}${url}, received ${res.status}`)
    }
    return await res.json(); //return body
  }
  
  getAllPeople = async () => {
    return [{id: 1, name: "Natasha", birthYear: "1968"},
       {id: 2, name: "Natasha2", birthYear: "1969"}
  ];
  }

  getPerson = async () => {
    return this._transformPeople();
  }

  getAllPlanet = async () => {
    return [{id: 1, name: "PlNatasha", birthYear: "1968"},
    {id: 2, name: "PLNatasha2", birthYear: "1969"}
];
  }

  getPlanet = async () => {
    return this._transformPlanet();
  }  

  getAllStarship = async () => {
    return [{id: 1, name: "STNatasha", birthYear: "1968"},
    {id: 2, name: "STNatasha2", birthYear: "1969"}
];
  }

  getStarship = async () => {
    return this._transformStarship();
  }  

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = () => {
    return {
    id: "4",
    name: "Erth",
    diameter: "200 000",
    gravity: "gravity",
    orbitalPeriod: "1period",
    population: "zombi",
    terrain: "planet.terrain",
    climate: "planet.climate",
    rotationPeriod: "planet.rotation_period",
    }
  }

  _transformStarship = () => {
    return {
    id: "10",
    name: "Rover",
    model: "4X",
    manufacturer: "Ukraine",
    costInCredits: "1000",
    length: "6",
    crew: "crew",
    passengers: "4",
    cargoCapacity: "cargo"
    }
  }

  _transformPeople = () => {
    return {
    id: "1",
    name: "Natasha",
    gender: "woman",
    birthYear: "1968",
    eyeColor: "green"
    }
  }

} 

