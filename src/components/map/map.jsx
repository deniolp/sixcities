import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
  }

  render() {
    return <div id="map" style={{height: 810}}></div>;
  }

  componentDidMount() {
    const {offers, city, leaflet} = this.props;
    try {
      this._renderMap(offers, city.location, leaflet);
    } catch (err) {
      // Не даём упасть
    }
  }

  _renderMap(offers, city, leaflet) {
    const {
      location: {latitude, longtitude, zoom},
    } = city;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zooms = 12;
    this.map = leaflet.map(`map`, {
      center: city.location,
      zoom: zooms,
      zoomControl: false,
      marker: true
    });

    this.map.setView([latitude, longtitude], zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    offers.map((item) => {
      const offerCoords = [item.coords[0], item.coords[1]];
      leaflet
      .marker(offerCoords, {icon})
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
  city: PropTypes.object.isRequired,
  leaflet: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers.filter((item) => item.city.name === state.city.name),
});

export {Map};

export default connect(mapStateToProps)(Map);
