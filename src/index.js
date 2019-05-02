import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const places = [
    {
      description: `Beautiful &amp; luxurious apartment at great location`,
    },
    {
      description: `Wood and stone place`,
    },
    {
      description: `Canal View Prinsengracht`,
    },
    {
      description: `Nice, cozy, warm big bed apartment`,
    },
    {
      description: `Wood and stone place`,
    },
  ];

  ReactDom.render(
      <App
        places={places}
      />,
      document.querySelector(`#root`)
  );
};

init();
