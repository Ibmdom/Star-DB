import React, {Component} from 'react';
import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {
    state = {
      data:  null,
    }
  
    onUpdate() {
      this.props.getData()
        .then((data)=>{this.setState({data})})
        .catch((err) => {this.onError(err)});
    }

    componentDidMount() {
      this.onUpdate()
    }

    onError = (err) => {
      console.log(err)
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        // console.log('n', this.props.getData);
        // console.log('old', prevProps.getData);
        // debugger;
        this.onUpdate();
      }
    }

    render () {
      const {data} = this.state;
      // console.log(data);
      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data}/>
    }
  }
}

export default withData;


