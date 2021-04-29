import React, { Component} from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: '1', 
    hasError: false
  }

  onPersonSelected = (id) => {
    // console.log(id);
    this.setState({
      selectedPerson: id
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

    const {selectedPerson} = this.state;

    return (
      <div className = "row mb2">
        <div className = "col-md-6">
          <ItemList onPersonSelected={this.onPersonSelected}/>
         </div>
        <div className = "col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>  
      </div>
    )
  }
}
