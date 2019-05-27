import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withHighlightedItem from '../../hocs/with-highlighted-item/with-highlighted-item';
import Place from '../place/place';

class PlaceList extends PureComponent {
  render() {
    const {offers, onClick, onMouseEnter, onMouseLeave, setHighlightedItem, active} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) => {
          return this._getPlace(item, onClick, onMouseEnter, onMouseLeave, setHighlightedItem, active);
        })
      }
    </div>;
  }

  _getPlace(item, onClick, onMouseEnter, onMouseLeave, setHighlightedItem, active) {
    return <Place
      place={item}
      key={item.title}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      setHighlightedItem={setHighlightedItem}
      active={item.title === active}
    />;
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setHighlightedItem: PropTypes.func.isRequired,
  active: PropTypes.string,
};

export default withHighlightedItem(PlaceList);
