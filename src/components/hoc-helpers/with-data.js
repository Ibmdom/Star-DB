import React, {Component} from 'react';
import Spinner from '../spinner';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data:  null,
    }
  
    componentDidMount() {
      // console.log(this.props);
      // const { getData } = this.props;
      getData()
        .then((data)=>{this.setState({data})})
        .catch((err) => {this.onError(err)});
    }
  
    onError = (err) => {
      console.log(err)
    }

    render () {
      const {data} = this.state;
      if (!data) {
        return <Spinner />;
      }
      // console.log(data);
      return <View {...this.props} data={data}/>
    }
  }
}

export default withData;