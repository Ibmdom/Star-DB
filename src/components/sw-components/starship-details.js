import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwService} from '../hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model:" />
      <Record field="manufacturer" label="Manufacturer:" />
      <Record field="length" label="Length:" />
      <Record field="passengers" label="Passengers:" />
    </ItemDetails>
  )
}


const mapStateToProps = (swapiService) => {
  return {
  getData: swapiService.getStarship,
  getImgUrl: swapiService.getImgStarship 
  }
}

export default withSwService(StarshipDetails, mapStateToProps);
