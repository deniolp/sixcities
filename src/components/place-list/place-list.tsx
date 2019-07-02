import * as React from 'react';

import Place from '../place/place';
import {Place as Offer} from '../../types';

interface Props {
  offers: Offer[],
  onPlaceClick: () => void,
}

class PlaceList extends React.PureComponent<Props, null> {
  render() {
    const {offers, onPlaceClick} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) => {
          return this._getPlace(item, onPlaceClick);
        })
      }
    </div>;
  }

  _getPlace(item, onPlaceClick) {
    return <Place
      place={item}
      key={item.id}
      onPlaceClick={onPlaceClick}
    />;
  }
}

export default PlaceList;
