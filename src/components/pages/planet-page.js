import React, {Component} from 'react';
import Row from '../row'

import {
  PlanetDetails,
  PlanetList,
} from '../sw-components';

export default class PlanetPage extends Component {

  state = {
    itemId: null, //'1', 
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
          <PlanetList onItemSelected={this.onItemSelected}/>
        } right={
          <PlanetDetails itemId={itemId} />
        } />
      </div>
    );
  }
};
