import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainPage from '../main-page/main-page';

const App = (props) => {
  const {places, onClick, leaflet, offers, city} = props;
  const cities = Array.from(places.reduce((array, current) => {
    array.add(current.city);
    return array;
  }, new Set()));

  return <MainPage
    places={places}
    offers={offers}
    cities={cities}
    city={city}
    onClick={onClick}
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
    city: PropTypes.string.isRequired,
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
    city: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  leaflet: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
};

const mapSateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
});

export default connect(mapSateToProps
)(App);
