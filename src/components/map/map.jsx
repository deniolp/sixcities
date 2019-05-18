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
    const {offers, city, leaflet} = this.props;
    this._renderMap(offers, city, leaflet);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.offers !== this.props.offers) {
      const {offers, city, leaflet} = nextProps;
      this.map.remove();
      this._renderMap(offers, city, leaflet);
    }
  }

  _renderMap(offers, city, leaflet) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zooms = 12;
    this.map = leaflet.map(`map`, {
      center: city,
      zoom: zooms,
      zoomControl: false,
      marker: true
    });

    this.map.setView(city, zooms);

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
    city: PropTypes.string.isRequired,
  })).isRequired,
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  leaflet: PropTypes.object.isRequired,
};

export default Map;
