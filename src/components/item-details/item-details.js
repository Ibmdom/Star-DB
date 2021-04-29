import React, { Component } from 'react';
// import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

export default class ItemDetails extends Component {
  // swapiService = new SwapiService();
  
  state = {
    item: null,
    imgItem: null,
  } 
  
  updateItem() {
    const {itemId, getData, getImgUrl} = this.props;
    if (!itemId){
      return;
    }
    console.log(getData);
    // this.swapiService.getPerson(itemId)
    getData()
    .then((item)=>{
      this.setState({item});}) 
    .catch(this.onError)
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }

  }

  render() {
    if (!this.state.item) {
      return (<span>Select a item from a list</span>);
    }
    if (this.state.item.id !== this.props.itemId) {
      return (<Spinner />);
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.item
    // console.log(this.props.getImgUrl(id))

    return (
      <div className="item-details card">
        <img className="item-image" 
          src={this.props.getImgUrl(id)}
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
