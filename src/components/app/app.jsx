import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../main-page/main-page';
import {ActionCreator} from '../../reducer';

const App = (props) => {
  const {onClick, leaflet, offers, city, onCityClick, cities} = props;

  return <MainPage
    offers={offers}
    cities={cities}
    city={city}
    onClick={onClick}
    onCityClick={(selectedCity) => onCityClick(selectedCity, offers)}
    leaflet={leaflet}
  />;
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
  onCityClick: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  cities: Array.from(state.offers.reduce((array, current) => {
    array.add(current.city.name);
    return array;
  }, new Set())).slice(0, 6),
  offers: state.offers.filter((item) => item.city.name === state.city.name),
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
