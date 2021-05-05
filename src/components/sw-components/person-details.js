import React from 'react';
import ItemDetails, {Record} from '../item-details';
import {withSwService} from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails
      {...props}>
      <Record field="gender" label="Gender:" />
      <Record field="birthYear" label="Birth Year:" />
      <Record field="eyeColor" label="Eye Color:" />
    </ItemDetails>
  )
}

const mapMethodToProps = (swapiService) => {
  return ({
    getData: swapiService.getPerson,
    getImgUrl: swapiService.getImgPerson
  })

}

export default withSwService(PersonDetails, mapMethodToProps);
