import React, { Component} from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
// import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

const Row = ({left, right}) => {
  return (
    <div className = "row mb2">
      <div className = "col-md-6">
        {left}
      </div>
      <div className = "col-md-6">
        {right}
      </div>  
    </div>
  )
}

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    item: null, //'1', 
  }

  onItemSelected = (id) => {
    this.setState({
      item: id
    })
  }
  
  render() {
    const {item} = this.state;
    const itemList = (
      <ItemList 
      onItemSelected={this.onItemSelected} 
      getData={this.swapiService.getAllPeople}>
      {(e) => `${e.name} (${e.birthYear})`}
      </ItemList>
    );
 
      const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={item} />
      </ErrorBoundry>
        );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    )
  }
}
