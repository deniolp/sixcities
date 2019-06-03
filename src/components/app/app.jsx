import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import {ActionCreator} from '../../reducer/data/data';
import {UserActionCreator} from '../../reducer/user/user';
import {getCity, getOffers} from '../../reducer/data/selectors';
import {getAuthorizationStatus, getUserData} from '../../reducer/user/selectors';

const App = (props) => {
  const {onClick, leaflet, offers, city, onCityClick, isAuthorizationRequired, signIn, userData} = props;
  const cities = Array.from(offers.slice().reduce((array, current) => {
    array.add(current.city.name);
    return array;
  }, new Set())).slice(0, 6);

  return !isAuthorizationRequired ? <MainPage
    offers={offers}
    cities={cities}
    city={city}
    onClick={onClick}
    onCityClick={(selectedCity) => onCityClick(selectedCity, offers)}
    leaflet={leaflet}
    signInHandler={() => signIn()}
    userData={userData}
  /> : <SignIn/>;
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
  userData: PropTypes.object,
  onCityClick: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
  userData: getUserData(state),
  isAuthorizationRequired: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (selectedCity, places) => {
    dispatch(ActionCreator.changeCity(selectedCity, places));
  },
  signIn: () => {
    dispatch(UserActionCreator.requireAuthorization(true));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps
)(App);
