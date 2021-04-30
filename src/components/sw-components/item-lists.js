import React from 'react';
import ItemList from '../item-list';
import {ViewList} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
  getAllPeople,
  getAllPlanet,
  getAllStarship
} = new SwapiService();

const PersonList = ViewList(ItemList, getAllPeople);
const PlanetList = ViewList(ItemList, getAllPlanet);
const StarshipList = ViewList(ItemList, getAllStarship);

export {
 PersonList,
 PlanetList,
 StarshipList
};