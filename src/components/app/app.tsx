import * as React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import SignIn from '../sign-in/sign-in';
import Header from '../header/header';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {ActionCreator, Operation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
import {getCity, getOffers} from '../../reducer/data/selectors';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import {Place, City, User} from '../../types';

interface Props {
  offers: Place[],
  city: City,
  user: User,
  favorites: [],
  isAuthorizationRequired: boolean,
  onCityClick: (selectedCity: string, offers: Place[]) => void,
  onLogIn: () => void,
  onLoadOffers: () => void,
  leaflet: any,
}

class App extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLogIn();
    this.props.onLoadOffers();
  }

  render() {
    const {leaflet, offers, city, onCityClick, isAuthorizationRequired, user} = this.props;
    const cities = Array.from(offers.slice().reduce((array, current) => {
      array.add(current.city.name);
      return array;
    }, new Set())).slice(0, 6);

    const Main = offers.length > 0 ? <MainPage
      offers={offers}
      cities={cities}
      city={city}
      onCityClick={(selectedCity: string) => onCityClick(selectedCity, offers)}
      leaflet={leaflet}
    /> : <MainPageEmpty
      city={city}
    />;

    return <Switch>
      <Route path="/" exact render={() => {
        return <div className="page page--gray page--main">
          <Header
            user={user}
            isAuthorizationRequired={isAuthorizationRequired}/>
          {Main}
        </div>;
      }}
      />
      <Route path="/login" exact render={() => {
        return <div className="page page--gray page--login">
          <Header
            user={user}
            isAuthorizationRequired={isAuthorizationRequired}/>
          <SignIn
            user={user}
          />
        </div>;
      }}
      />
      <Route path="/favorites" exact render={() => {
        const WrappedFavorites = withPrivateRoute(Favorites);
        return <div className="page">
          <Header
            user={user}
            isAuthorizationRequired={isAuthorizationRequired}/>
          <WrappedFavorites/>
        </div>;
      }
      }/>
      <Route path="/offer/:id" render={(routerProps) => {
        return <div className="page">
          <Header
            user={user}
            isAuthorizationRequired={isAuthorizationRequired}/>
          <Room
            {...routerProps}
            offers={offers}
          />
        </div>;
      }}
      />
      <Redirect from='*' to='/' />
    </Switch>;
  }
}

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
  user: getUserData(state),
  isAuthorizationRequired: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (selectedCity, places) => {
    dispatch(ActionCreator.changeCity(selectedCity, places));
  },
  onLogIn: () => dispatch(UserOperation.logIn()),
  onLoadOffers: () => dispatch(Operation.loadOffers())
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps
)(App);
