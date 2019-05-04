import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const places = [
    {
      description: `Beautiful luxurious apartment at great location`,
      grade: `Premium`,
      price: 120,
      ratingWidth: {
        width: `93%`
      },
      bookmarked: false,
      type: `Apartment`,
      image: `img/apartment-01.jpg`,
    },
    {
      description: `Wood and stone place`,
      price: 80,
      ratingWidth: {
        width: `80%`
      },
      bookmarked: true,
      type: `Private room`,
      image: `img/room.jpg`,
    },
    {
      description: `Canal View Prinsengracht`,
      price: 132,
      ratingWidth: {
        width: `80%`
      },
      bookmarked: false,
      type: `Apartment`,
      image: `img/apartment-02.jpg`,
    },
    {
      description: `Nice, cozy, warm big bed apartment`,
      grade: `Premium`,
      price: 180,
      ratingWidth: {
        width: `100%`
      },
      bookmarked: false,
      type: `Apartment`,
      image: `img/apartment-03.jpg`,
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
