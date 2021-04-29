import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  
  state = {
    person: null
  } 
  
  updatePerson() {
    const {personId} = this.props;
    if (!personId){
      return;
    }
    this.swapiService.getPerson(personId)
    .then((person)=>{
      this.setState({person});}) 
    .catch(this.onError)
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }

  }

  render() {
    // console.log(!this.state.person);

    if (!this.state.person) {
      return (<span>Select a person fro a list</span>);
    }
    // console.log('state', this.state.person.id);
    // console.log('pr',this.props.personId);
    // debugger;
    if (this.state.person.id !== this.props.personId) {
      return (<Spinner />);
    }
    const {id, name, gender, birthYear, eyeColor} = this.state.person
    // if (id !== this.props.personId) {
    //   return (<Spinner />)
    // }
    return (
      <div className="person-details card">
        <img className="person-image" 
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt="Object" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
