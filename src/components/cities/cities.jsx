import React from 'react';
import PropTypes from 'prop-types';

import withHighlightedItem from '../../hocs/with-highlighted-item/with-highlighted-item';

const Cities = (props) => {
  const {cities, onCityClick, setHighlightedItem, highlightedItem} = props;

  return cities.map((item, index) => {
    return <li className="locations__item" key={`city-${item}`} onClick={() => {
      onCityClick(item);
      setHighlightedItem(index);
    }}>
      <a className={index !== highlightedItem ? `locations__item-link tabs__item` : `locations__item-link tabs__item tabs__item--active`} href="#">
        <span>{item}</span>
      </a>
    </li>;
  });
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityClick: PropTypes.func.isRequired,
  setHighlightedItem: PropTypes.func.isRequired,
  highlightedItem: PropTypes.number.isRequired,
};

export default withHighlightedItem(Cities, 0);
