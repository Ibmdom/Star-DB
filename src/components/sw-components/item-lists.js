import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helpers';
import {withSwService} from '../hoc-helpers';

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

const mapMethodToPropsPerson = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapMethodToPropsPlanet = (swapiService) => {
  return {
    getData: swapiService.getAllPlanet
  }
}

const mapMethodToPropsStarship = (swapiService) => {
  return {
    getData: swapiService.getAllStarship
  }
}

const PersonList = withSwService(
  withData(withClildFunction(ItemList, renderNamePerson)),
  mapMethodToPropsPerson
);

const PlanetList = withSwService(
  withData(withClildFunction(ItemList, renderName)),
  mapMethodToPropsPlanet);

const StarshipList = withSwService(
  withData(withClildFunction(ItemList, renderName)),
  mapMethodToPropsStarship);

export {
 PersonList,
 PlanetList,
 StarshipList
};