// https://swapi.co
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// ReactDOM.render(
// );


fetch('https://swapi.dev/api/people/1/')
  .then((res)=>{
    return res.json();
  })
  .then((body)=>{
  console.log(body);
  });

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

getResource('https://swapi.dev/api/people/1/')
  .then((body) => {
    console.log(body);
  });