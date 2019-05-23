import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Place from '../place/place';

class PlaceList extends PureComponent {
  render() {
    const {offers, onClick, onMouseEnter, onMouseLeave} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item, index) => {
          return this._getPlace(item, index, onClick, onMouseEnter, onMouseLeave);
        })
      }
    </div>;
  }

  _getPlace(item, index, onClick, onMouseEnter, onMouseLeave) {
    return <Place
      place={item}
      key={index}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
};

export default PlaceList;
