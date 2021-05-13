import React, {Component} from 'react';
// import SwapiService from '../../services/swapi-service';
// import DemoSwapiService from '../../services/demo-swapi-service';
import Row from '../row';

import {
  PersonDetails,
  PersonList,
 } from '../sw-components';

export default class PeoplePage extends Component {

  state = {
    itemId: null, //'1', 
    // swapiService: new SwapiService(),
  }

  onItemSelected = (id) => {
    this.setState({
      itemId: id
    })
  }

  render() {
    const { itemId } = this.state;
    return (
      <div>
        <Row left={
          <PersonList onItemSelected={this.onItemSelected} />
        } right={
          <PersonDetails itemId={itemId} />
        } />
      </div>
    );
  }
};
