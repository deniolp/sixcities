import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUserData} from '../../reducer/user/selectors';
import {User} from '../../types';

interface Props {
  user: User,
}

interface State {
  showRender: boolean,
}

const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends React.PureComponent<Props, State> {
    _isMounted = false;
    constructor(props) {
      super(props)

      this.state = {
       showRender: false
      }
    }

    componentDidMount() {
      this._isMounted = true;
      setTimeout(() => {
        if (this._isMounted) {
          this.setState({ showRender: true });
        }
      }, 400)
     }

     componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const {showRender} = this.state;
      return <div>
        {showRender && this._renderFavorites()}
      </div>
    }

    _renderFavorites() {
      const {user} = this.props;
      if (user.name) {
        return <Component
          {...this.props}
          />;
      } else return <Redirect to="/login" />;
    }
  }

  const mapStateToProps = (state) => ({
    user: getUserData(state),
  });

  return connect(mapStateToProps, null)(WithPrivateRoute);
};

export default withPrivateRoute;
