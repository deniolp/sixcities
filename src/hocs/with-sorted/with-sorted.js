import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withSorted = (Component) => {
  class WithSorted extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        sortedOffers: [],
        activeSorting: 0,
      };

      this._onSortingClickHandler = this._onSortingClickHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.city !== prevProps.city) {
        this.setState({
          sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name),
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onSortingClickHandler={this._onSortingClickHandler}
          sortedOffers={this.state.sortedOffers}
          activeSorting={this.state.activeSorting}
        />
      );
    }

    _onSortingClickHandler(index) {
      switch (index) {
        case 0:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name),
            activeSorting: 0,
          });
          break;

        case 1:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name).slice(``).sort((a, b) => a.price > b.price),
            activeSorting: 1,
          });
          break;

        case 2:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name).slice(``).sort((a, b) => a.price < b.price),
            activeSorting: 2,
          });
          break;

        case 3:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name).slice(``).sort((a, b) => a.rating < b.rating),
            activeSorting: 3,
          });
          break;
      }
    }
  }

  WithSorted.propTypes = {
    city: PropTypes.object,
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
  };
  return WithSorted;
};

export default withSorted;
