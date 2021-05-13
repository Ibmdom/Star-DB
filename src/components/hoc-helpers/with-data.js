import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    }

    onUpdate() {
      this.setState({
        loading: true,
        error: false
      })

      this.props.getData()
        .then((data) => { 
          this.setState({ 
            data,
            loading: false
          }) })
        .catch(() => {
          this.setState({
            loading: false,
            error: true
          })
        });
    }

    componentDidMount() {
      this.onUpdate()
    }

    onError = (err) => {
      console.log(err)
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.onUpdate();
      }
    }

    render() {
      const { data, error, loading } = this.state;
      if (error) {
        return <ErrorIndicator />;
      }
      if (loading) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />
    }
  }
}

export default withData;


