import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {SwapiServiceConsumer} from '../sw-service-context';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer >
      {({getPerson, getImgPerson}) => {
        return (
        <ItemDetails 
          itemId={itemId}
          getData={getPerson}
          getImgUrl={getImgPerson}>
          <Record field="gender" label="Gender:" />
          <Record field="birthYear" label="Birth Year:" />
          <Record field="eyeColor" label="Eye Color:" />
        </ItemDetails>
        )}
      }
    </SwapiServiceConsumer>
  )
}

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer >
      { ({ getPlanet, getImgPlanet }) => {
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
      }}
    </SwapiServiceConsumer>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getImgStarship }) => {
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
      }}
    </SwapiServiceConsumer>  
  )
}

export {
 PersonDetails,
 PlanetDetails,
 StarshipDetails
};
