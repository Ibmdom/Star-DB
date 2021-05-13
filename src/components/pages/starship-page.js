import React, {Component} from 'react';
import Row from '../row'

import {
  StarshipDetails,
  StarshipList 
} from '../sw-components';

export default class StarshipPage extends Component {

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
              <StarshipList onItemSelected={this.onItemSelected}/>
            } right={
              <StarshipDetails itemId={itemId} />
            } />
      </div>
    );
  }
};
