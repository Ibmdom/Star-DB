import React from 'react';
import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPlanet,
  getStarship,
  getImgPerson,
  getImgPlanet,
  getImgStarship
} = new SwapiService();

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails 
      itemId={itemId}
      getData={getPerson}
      getImgUrl={getImgPerson}>
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth Year:" />
      <Record field="eyeColor" label="Eye Color:" />
    </ItemDetails>
  )
}

const PlanetDetails = () => {}

const StarshipDetails = () => {}

export {
 PersonDetails,
 PlanetDetails,
 StarshipDetails
};