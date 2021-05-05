import React from 'react';
import {SwapiServiceConsumer} from '../sw-service-context';


const withSwService = (Wrapper, mapMethodToProps) => {

  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (<Wrapper {...props} {...mapMethodToProps(swapiService)} />)
          }
        }
      </SwapiServiceConsumer>
    )

  }



}

export default withSwService;