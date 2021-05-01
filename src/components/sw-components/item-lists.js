import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
  getAllPeople,
  getAllPlanet,
  getAllStarship
} = new SwapiService();

const withClildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>)
  }
}

const renderNamePerson = ({name, birthYear}) => <span>{name} ({birthYear})</span>
const renderName = ({name}) => name  // or <span>{name}</span>

const PersonList = withData(
  withClildFunction(ItemList, renderNamePerson),
  getAllPeople
);

const PlanetList = withData(
  withClildFunction(ItemList, renderName),
  getAllPlanet);

const StarshipList = withData(
  withClildFunction(ItemList, renderName),
  getAllStarship);

export {
 PersonList,
 PlanetList,
 StarshipList
};