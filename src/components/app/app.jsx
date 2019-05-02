import React from 'react';
import MainPage from '../main-page/main-page.jsx';

const App = (props) => {
  const {places} = props;

  return <MainPage
    places={places}
  />;
};

export default App;
