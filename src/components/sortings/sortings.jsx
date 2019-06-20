import React from 'react';
import PropTypes from 'prop-types';

import withSortings from '../../hocs/with-sortings/with-sortings';

const sortings = [
  `Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`
];

const Sortings = (props) => {
  const {onSortingsClickHandler, onSortingClickHandler, onMouseLeaveHandler, opened, activeSorting} = props;

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex="0" onClick={() => onSortingsClickHandler()}>
      {sortings[activeSorting]}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    <ul className={`places__options places__options--custom ${opened ? `places__options--opened` : ``}`} onMouseLeave={() => onMouseLeaveHandler()}>
      {sortings.map((item, index) => <li className={`places__option ${index === activeSorting ? `places__option--active` : ``}`} tabIndex="0" key={`Sorting-${item}`} onClick={() => onSortingClickHandler(index)}>{item}</li>)}
    </ul>
  </form>;
};

Sortings.propTypes = {
  onSortingsClickHandler: PropTypes.func.isRequired,
  onSortingClickHandler: PropTypes.func.isRequired,
  onMouseLeaveHandler: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired,
  activeSorting: PropTypes.number.isRequired,
};

export {Sortings};

export default withSortings(Sortings);
