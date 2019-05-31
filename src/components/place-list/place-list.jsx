import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withHighlightedItem from '../../hocs/with-highlighted-item/with-highlighted-item';
import Place from '../place/place';

class PlaceList extends PureComponent {
  render() {
    const {offers, onClick, onMouseEnter, onMouseLeave, setHighlightedItem, active} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item, index) => {
          return this._getPlace(item, index, onClick, onMouseEnter, onMouseLeave, setHighlightedItem, active);
        })
      }
    </div>;
  }

  _getPlace(item, index, onClick, onMouseEnter, onMouseLeave, setHighlightedItem, active) {
    return <Place
      place={item}
      key={`${item.title}-${index}`}
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.object.isRequired,
    }).isRequired,
  })).isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setHighlightedItem: PropTypes.func.isRequired,
  active: PropTypes.string,
};

export default withHighlightedItem(PlaceList);
