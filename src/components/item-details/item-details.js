import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>)
}
export {Record};

export default class ItemDetails extends Component {
  
  state = {
    item: null,
    imgItem: null,
  } 
  
  updateItem() {
    const {itemId, getData, getImgUrl} = this.props;
    if (!itemId){
      return;
    }
    getData(itemId)
    .then((item)=>{
      this.setState({
        item,
        imgItem: getImgUrl(itemId)
      });}) 
    // .catch((err) => {console.log('Ошибка', err)})
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId 
        || this.props.getData !== prevProps.getData
        || this.props.getImgUrl !== prevProps.getImgUrl
        )  {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
      return (<span>Select a item from a list</span>);
    }

    if (this.state.item.id !== String(this.props.itemId)) {
      return (<Spinner />);
    }

    const {item, imgItem} = this.state;
    const {name} = item;

    return (
      <div className="item-details card">
        <img className="item-image" 
          src={imgItem}
          alt="Object" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
               React.Children.map(this.props.children, (child) => {
             return React.cloneElement(child, {item});
             })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
