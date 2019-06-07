import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';

const withPrivateRoute = (Component, data) => {
  class WithPrivateRoute extends PureComponent {
    render() {
      if (!Object.keys(data).length) {
        return <Redirect to="/login" />;
      }

      return <Component/>;
    }
  }
  return WithPrivateRoute;
};

export default withPrivateRoute;
