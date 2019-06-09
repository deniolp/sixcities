import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
  }

  render() {
    return <section id="map" className="cities__map map"></section>;
  }

  componentDidMount() {
    const {offers, city, leaflet} = this.props;
    try {
      this._renderMap(offers, city, leaflet);
    } catch (error) {
      // global.console.log(error)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.offers !== prevProps.offers) {
      const {offers, city, leaflet} = this.props;
      if (this.map) {
        this.map.remove();
      }
      this._renderMap(offers, city, leaflet);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.activeCard !== nextProps.activeCard) {
      return false;
    }
    return true;
  }

  _renderMap(offers, city, leaflet) {
    const {latitude, longitude, zoom} = city.location;
    const SETTINGS = {
      center: [latitude, longitude],
      zoom: 13,
      zoomControl: false,
      marker: true
    };
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.map = leaflet.map(`map`, SETTINGS);

    this.map.setView([latitude, longitude], zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.map((item) => {
      const offerCoords = [item.location.latitude, item.location.longitude];
      leaflet
      .marker(offerCoords, {icon})
      .addTo(this.map);
    });
  }
}

Map.propTypes = {
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
  city: PropTypes.object.isRequired,
  leaflet: PropTypes.object.isRequired,
  activeCard: PropTypes.object.isRequired,
};

export default Map;
