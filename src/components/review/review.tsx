import * as React from 'react';

import {Review as Rev} from '../../types';

interface Props {
  review: Rev,
}

const Review = ({review}: Props) => {
  const getDate = (data) => {
    const year = data.getFullYear();
    const month = data.toLocaleString(`en-us`, {month: `long`});
    return month + ` ` + year;
  };

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${(review.rating * 100) / 5}%`,}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={review.date}>{getDate(new Date(review.date))}</time>
    </div>
  </li>;
};

export default Review;
