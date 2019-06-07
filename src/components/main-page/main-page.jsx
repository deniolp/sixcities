import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import Cities from '../cities/cities';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

const MainPage = (props) => {
  const {cities, onClick, leaflet, offers, city, onCityClick, onMouseEnter, onMouseLeave, activeCard} = props;
  const filteredOffers = offers.filter((item) => item.city.name === city.name);

  return <Fragment>
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
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex="0">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom">
              <li className="places__option places__option--active" tabIndex="0">Popular</li>
              <li className="places__option" tabIndex="0">Price: low to high</li>
              <li className="places__option" tabIndex="0">Price: high to low</li>
              <li className="places__option" tabIndex="0">Top rated first</li>
            </ul>
          </form>
          <PlaceList
            key={`place-list-${city.name}`}
            offers={filteredOffers}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={filteredOffers}
            city={city}
            leaflet={leaflet}
            activeCard={activeCard}
          />
        </div>
      </div>
    </div>
  </Fragment>;
};

MainPage.propTypes = {
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
  leaflet: PropTypes.object.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  activeCard: PropTypes.object.isRequired,
};

export default withActiveCard(MainPage);
