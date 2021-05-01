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

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImgUrl={getImgPlanet}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="diameter" label="Diameter:" />
    </ItemDetails>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId}
      getData={getStarship}
      getImgUrl={getImgStarship}>
      <Record field="model" label="Model:" />
      <Record field="manufacturer" label="Manufacturer:" />
      <Record field="length" label="Length:" />
      <Record field="passengers" label="Passengers:" />
    </ItemDetails>
  )
}

export {
 PersonDetails,
 PlanetDetails,
 StarshipDetails
};
