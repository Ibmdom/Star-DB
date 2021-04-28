import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './item-list.css';

export default class ItemList extends Component {
  // constructor(props) {
  //   super(props)
  // }
  swapiService = new SwapiService();

  state = {
    peopleList:  null,
  }
  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList)=>{this.setState({peopleList})})
      .catch((err) => {this.onError(err)});
  }

  onError = (err) => {
    console.log(err)
  }



  render() {
    const {peopleList} = this.state;
    if (!peopleList) {
      return <Spinner />;
    }
    const items = peopleList.map(({id, name}) => {
      return (
       <li className="list-group-item"
         key={id}
         onClick={() => {this.props.onPersonSelected(id)}}
      >{name}
      </li>)
      }
    );
    // console.log(peopleList);
    // console.log(items);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    )
  }
}

