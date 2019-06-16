import React from 'react';
import PropTypes from 'prop-types';

import withSortings from '../../hocs/with-sortings/with-sortings';

const Sortings = (props) => {
  let {onSortingsClickHandler, opened} = props;
  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0" onClick={() => onSortingsClickHandler()}>
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    <ul className={`places__options places__options--custom ${opened ? `places__options--opened` : ``}`}>
      <li className="places__option places__option--active" tabIndex="0">Popular</li>
      <li className="places__option" tabIndex="0">Price: low to high</li>
      <li className="places__option" tabIndex="0">Price: high to low</li>
      <li className="places__option" tabIndex="0">Top rated first</li>
    </ul>
  </form>;
};

Sortings.propTypes = {
  onSortingsClickHandler: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default withSortings(Sortings);
