import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import {ActionCreator} from '../../reducer/data/data';
import {getCity, getOffers} from '../../reducer/data/selectors';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';

const App = (props) => {
  const {onClick, leaflet, offers, city, onCityClick, isAuthorizationRequired, user} = props;
  const cities = Array.from(offers.slice().reduce((array, current) => {
    array.add(current.city.name);
    return array;
  }, new Set())).slice(0, 6);

  return <Switch>
    <Route path="/" exact render={() => {
      return <MainPage
        offers={offers}
        cities={cities}
        city={city}
        onClick={onClick}
        onCityClick={(selectedCity) => onCityClick(selectedCity, offers)}
        leaflet={leaflet}
        user={user}
        isAuthorizationRequired={isAuthorizationRequired}
      />;
    }}
    />
    <Route path="/login" exact render={() => {
      return <div className="page page--gray page--login">
        <SignIn
          user={user}
        />
      </div>;
    }}
    />
  </Switch>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired,
    }).isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  leaflet: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired,
  user: PropTypes.object,
  onCityClick: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

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
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps
)(App);
