import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwService} from '../hoc-helpers';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population:" />
      <Record field="rotationPeriod" label="Rotation Period:" />
      <Record field="diameter" label="Diameter:" />
    </ItemDetails>
  )
}

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImgUrl: swapiService.getImgPlanet 
  }
}

export default withSwService(PlanetDetails, mapMethodToProps);
