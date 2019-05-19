import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../main-page/main-page';
import {ActionCreator} from '../../reducer';

const App = (props) => {
  const {places, onClick, leaflet, offers, city, onCityClick} = props;
  const cities = Array.from(places.reduce((array, current) => {
    array.add(current.city.name);
    return array;
  }, new Set())).slice(0, 6);

  return <MainPage
    offers={offers}
    cities={cities}
    city={city}
    onClick={onClick}
    onCityClick={(selectedCity) => onCityClick(selectedCity, places)}
    leaflet={leaflet}
  />;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  })).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  leaflet: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (selectedCity, places) => {
    dispatch(ActionCreator.changeCity(selectedCity));
    dispatch(ActionCreator.getOffers(selectedCity, places));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps
)(App);
