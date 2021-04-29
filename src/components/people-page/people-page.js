import React, { Component} from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

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
    hasError: false
  }

  onItemSelected = (id) => {
    this.setState({
      item: id
    })
  }

  componentDidCatch(error, info){
     // debugger;
    this.setState({hasError: true});
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const {item} = this.state;
    const itemList = (
      <ItemList 
      onItemSelected={this.onItemSelected} 
      getData={this.swapiService.getAllPeople}>
      {(e) => `${e.name} (${e.birthYear})`}
      </ItemList>
    );

    const personDetails = (<PersonDetails personId={item} />);

    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}
