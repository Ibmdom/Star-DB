// https://swapi.co
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// ReactDOM.render(
// );


// fetch('https://swapi.dev/api/people/1/')
//   .then((res)=>{
//     return res.json();
//   })
//   .then((body)=>{
//   console.log(body);
//   });

// const getResource = async (url) => {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error(`OOPPSS Could not fetch ${url} , received ${res.status}`)
//   }
//   const body = await res.json();
//   return body;
// }

// getResource('https://swapi.dev/api/people/')
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.log('We have ', err)
//   });

class SwapiService {
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
    return res.results;
    // return await this.getResource(`/people/`);
  }

  async getPerson(id) {
    return await this.getResource(`/people/${id}/`);
  }

  async getAllPlanet() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  async getPlanet(id) {
    return await this.getResource(`/planets/${id}/`);
  }  

  async getAllStarship() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  async getStarship(id) {
    return await this.getResource(`/starships/${id}/`);
  }  

} 


const swapi = new SwapiService();
swapi.getAllPeople()
.then((body) => { 
  // console.log(body)
  body.forEach((el) => {
  console.log(el.name)})
})
.catch((err) => {console.log(err)});


swapi.getPerson(5)
.then((body) => {console.log(body)});;

swapi.getAllStarship()
.then((body) => { 
  // console.log(body)
  body.forEach((el) => {
  console.log(el.name)})
})
.catch((err) => {console.log(err)});


swapi.getStarship(5)
.then((body) => {console.log(body)});;