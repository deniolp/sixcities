import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {places} = props;

  return <MainPage
    places={places}
  />;
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
