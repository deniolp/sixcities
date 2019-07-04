import * as React from 'react';

import Place from '../place/place';
import {Place as Offer} from '../../types';

interface Props {
  offers: Offer[],
  onPlaceClick: () => void,
  activeCardId: number | null,
}

class PlaceList extends React.PureComponent<Props, null> {
  render() {
    const {offers, onPlaceClick, activeCardId} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) => {
          return this._getPlace(item, onPlaceClick, activeCardId);
        })
      }
    </div>;
  }

  _getPlace(item, onPlaceClick, activeCardId) {
    return <Place
      place={item}
      key={item.id}
      onPlaceClick={onPlaceClick}
      activeCardId={activeCardId}
    />;
  }
}

export default PlaceList;
