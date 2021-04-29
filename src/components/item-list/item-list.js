import React, {Component} from 'react';
import Spinner from '../spinner';
import './item-list.css';

export default class itemList extends Component {

  state = {
    itemList:  null,
  }
  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList)=>{this.setState({itemList})})
      .catch((err) => {this.onError(err)});
  }

  onError = (err) => {
    // console.log(err)
  }

  renderitemList(arr) {
    return arr.map(({id, name}) => {
      return (
       <li className="list-group-item"
         key={id}
         onClick={() => {this.props.onItemSelected(id)}}>
         {name}
      </li>)
      }
    );
  }


  render() {
    const {itemList} = this.state;
    if (!itemList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">
        {this.renderitemList(itemList)}
      </ul>
    )
  }
}

