import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import Cities from '../cities/cities';
import withActiveCard from '../../hocs/with-active-card/with-active-card';

const MainPage = (props) => {
  const {cities, onClick, leaflet, offers, city, onCityClick, onMouseEnter, onMouseLeave, activeCard, user, isAuthorizationRequired} = props;
  const filteredOffers = offers.filter((item) => item.city.name === city.name);

  const userImage = isAuthorizationRequired ? {} : {backgroundImage: `url(https://es31-server.appspot.com/six-cities${user.avatarUrl})`};

  return <div className="page page--gray page--main">
    <div style={{display: `none`}}>
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
    </div>

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuthorizationRequired ? (
                  <Link to="/login" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Sign In</span>
                  </Link>
                ) : <Link to="/" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper" style={user.avatarUrl ? userImage : {}}></div>
                  <span className="header__user-name user__name">{user.email ? user.email : `Sign In`}</span>
                </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--index">
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
    </main>
  </div>;
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
  user: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.object.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  activeCard: PropTypes.object.isRequired,
  isAuthorizationRequired: PropTypes.bool,
};

export default withActiveCard(MainPage);
