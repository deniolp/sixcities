import React from 'react';
import PropTypes from 'prop-types';

const Cities = (props) => {
  const {cities, city} = props;

  return cities.map((item) => {
    return <li className="locations__item" key={`city-${item}`}>
      <a className={item !== city ? `locations__item-link tabs__item` : `locations__item-link tabs__item tabs__item--active`} href="#">
        <span>{item}</span>
      </a>
    </li>;
  });
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
};

export default Cities;
