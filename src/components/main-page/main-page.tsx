import * as React from 'react';

import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import Cities from '../cities/cities';
import Sortings from '../sortings/sortings';
import withActiveCard from '../../hocs/with-active-card/with-active-card';
import withSorted from '../../hocs/with-sorted/with-sorted';
import {Place, City} from '../../types';

interface Props {
  offers: Place[],
  sortedOffers: Place[],
  activeCard: Place,
  city: City,
  cities: [],
  favorites: [],
  isAuthorizationRequired: boolean,
  onCityClick: () => void,
  onPlaceClick: () => void,
  onSortingClick: () => void,
  leaflet: any,
  activeSorting: number,
}

const MainPage = ({cities, leaflet, offers, city, onCityClick, onPlaceClick, activeCard, onSortingClick, sortedOffers, activeSorting}: Props) => {
  const filteredOffers = sortedOffers.length === 0 ? offers.filter((item) => item.city.name === city.name) : sortedOffers;

  return <React.Fragment>
    <h1 className="visually-hidden">Cities</h1>
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <Cities
            cities={cities}
            city={city}
            onCityClick={onCityClick}
          />
        </ul>
      </section></div>
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${filteredOffers.length} ${filteredOffers.length === 1 ? `place` : `places`} to stay in ${city.name}`}</b>
          <Sortings
            onSortingClick={onSortingClick}
            activeSorting={activeSorting}
          />
          <PlaceList
            key={`place-list-${city.name}`}
            offers={filteredOffers}
            onPlaceClick={onPlaceClick}
            activeCardId={activeCard ? activeCard.id : null}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={filteredOffers}
            city={city}
            leaflet={leaflet}
            activeCard={activeCard}
            className={``}
          />
        </div>
      </div>
    </div>
  </React.Fragment>;
};

export {MainPage};

export default withActiveCard(withSorted(MainPage));
