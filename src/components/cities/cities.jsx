import React from 'react';
import PropTypes from 'prop-types';

const Cities = (props) => {
  const {cities, onCityClick, setHighlitedItem, highlitedItem} = props;

  return cities.map((item, index) => {
    return <li className="locations__item" key={`city-${item}`} onClick={() => {
      onCityClick(item);
      setHighlitedItem(index);
    }}>
      <a className={index !== highlitedItem ? `locations__item-link tabs__item` : `locations__item-link tabs__item tabs__item--active`} href="#">
        <span>{item}</span>
      </a>
    </li>;
  });
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityClick: PropTypes.func.isRequired,
  setHighlitedItem: PropTypes.func.isRequired,
  highlitedItem: PropTypes.number.isRequired,
};

export default Cities;
