import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {places, onClick} = props;

  return <MainPage
    places={places}
    onClick={onClick}
  />;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    grade: PropTypes.string,
    price: PropTypes.number.isRequired,
    ratingWidth: PropTypes.objectOf(PropTypes.string).isRequired,
    bookmarked: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
};

export default App;
