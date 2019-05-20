import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
  }

  render() {
    return <div id="map" style={{height: 794}}></div>;
  }

  componentDidMount() {
    const {offers, coords, leaflet} = this.props;
    this._renderMap(offers, coords, leaflet);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offers !== this.props.offers) {
      const {offers, coords, leaflet} = nextProps;
      this.map.remove();
      this._renderMap(offers, coords, leaflet);
    }
  }

  _renderMap(offers, coords, leaflet) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zooms = 12;
    this.map = leaflet.map(`map`, {
      center: coords,
      zoom: zooms,
      zoomControl: false,
      marker: true
    });

    this.map.setView(coords, zooms);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.map((item) => {
      const offerCords = [item.coords[0], item.coords[1]];
      leaflet
      .marker(offerCords, {icon})
      .addTo(this.map);
    });
  }
}

Map.propTypes = {
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
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  leaflet: PropTypes.object.isRequired,
};

export default Map;
