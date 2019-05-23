import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveCard = ((Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: {},
      };

      this._onCardMouseEnterHandler = this._onCardMouseEnterHandler.bind(this);
      this._onCardMouseLeaveHandler = this._onCardMouseLeaveHandler.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this._onCardMouseEnterHandler}
          onMouseLeave={this._onCardMouseLeaveHandler}
          activeCard={this.state.activeCard}
        />
      );
    }

    _onCardMouseEnterHandler(item) {
      this.setState({
        activeCard: item,
      });
    }

    _onCardMouseLeaveHandler() {
      this.setState({
        activeCard: {},
      });
    }
  }

  withActiveCard.propTypes = {
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
    leaflet: PropTypes.object.isRequired,
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    city: PropTypes.string.isRequired,
    onCityClick: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  };

  return WithActiveCard;
});

export default withActiveCard;
