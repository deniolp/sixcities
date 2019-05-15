import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{height: 794}} ref={(ref) => {
      this.container = ref;
    }}></div>;
  }

  componentDidMount() {
    const {places} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zooms = 12;
    const map = leaflet.map(this.container, {
      center: city,
      zoom: zooms,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zooms);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    places.map((item) => {
      const offerCords = [item.coords[0], item.coords[1]];
      leaflet
      .marker(offerCords, {icon})
      .addTo(map);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    coords: PropTypes.array.isRequired,
  })).isRequired,
};

export default Map;
