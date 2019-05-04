import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
  const {place, onClick} = props;

  return <article className="cities__place-card place-card">
    {
      place.grade ? <div className="place-card__mark">
        <span>{place.grade}</span>
      </div> : null
    }
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={place.image} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{place.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={place.bookmarked ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={place.ratingWidth}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#" onClick={onClick}>{place.description}</a>
      </h2>
      <p className="place-card__type">{place.type}</p>
    </div>
  </article>;
};

Place.propTypes = {
  place: PropTypes.shape({
    description: PropTypes.string.isRequired,
    grade: PropTypes.string,
    price: PropTypes.number.isRequired,
    ratingWidth: PropTypes.objectOf(PropTypes.string).isRequired,
    bookmarked: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default Place;
