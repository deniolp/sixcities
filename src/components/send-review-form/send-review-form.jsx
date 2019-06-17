import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/data/data';
import withValidated from '../../hocs/with-validated/with-validated';

class SendReviewForm extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, onChangeTextareaHandler, onClickRadioHandler, isValidated} = this.props;

    return <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();
      const data = new FormData(evt.target);
      this._handleSubmit(data.get(`review`), data.get(`rating`), id);
    }}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onClick={() => onClickRadioHandler()}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={() => onClickRadioHandler()}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={() => onClickRadioHandler()}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={() => onClickRadioHandler()}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={() => onClickRadioHandler()}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(evt) => onChangeTextareaHandler(evt)}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isValidated ? false : true}>Submit</button>
      </div>
    </form>;
  }

  _handleSubmit(comment, rating, id) {
    const review = {
      rating,
      comment
    };

    this.props.submitForm(review, id);
  }
}

SendReviewForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  onChangeTextareaHandler: PropTypes.func.isRequired,
  onClickRadioHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isValidated: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  submitForm: (review, id) => dispatch(Operation.postReview(review, id)),
});

export {SendReviewForm};

export default connect(null, mapDispatchToProps)(withValidated(SendReviewForm));
