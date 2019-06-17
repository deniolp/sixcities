import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AddFavoritesButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const isFavorite = false;
    const {fromRoom} = this.props;
    return <button className={this._getButtonClass(fromRoom, isFavorite)} type="button">
      <svg className={this._getIconClass(fromRoom)} width={fromRoom ? `31` : `18`} height={fromRoom ? `33` : `19`}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>;
  }

  _getButtonClass(fromRoom, isFavorite) {
    const source = fromRoom ? `property` : `place-card`;

    return isFavorite ? `${source}__bookmark-button ${source}__bookmark-button--active button` : `${source}__bookmark-button button`;
  }

  _getIconClass(fromRoom) {
    const source = fromRoom ? `property` : `place-card`;

    return `${source}__bookmark-icon`;
  }
}

AddFavoritesButton.propTypes = {
  fromRoom: PropTypes.bool,
};

export default AddFavoritesButton;
