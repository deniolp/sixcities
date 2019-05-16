import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = (props) => {
  const {places, onClick, leaflet} = props;

  return <MainPage
    places={places}
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
  })).isRequired,
  onClick: PropTypes.func,
  leaflet: PropTypes.object.isRequired,
};

export default App;
