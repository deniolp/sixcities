import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCity} from '../../reducer/data/selectors';

const withActiveCard = ((Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: {},
      };

      this._onCardClickHandler = this._onCardClickHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.city !== prevProps.city) {
        this.setState({
          activeCard: {},
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onClickHandler={this._onCardClickHandler}
          activeCard={this.state.activeCard}
        />
      );
    }

    _onCardClickHandler(item) {
      this.setState({
        activeCard: item,
      });
    }
  }

  WithActiveCard.propTypes = {
    city: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    city: getCity(state),
  });

  return connect(mapStateToProps, null)(WithActiveCard);
});

export default withActiveCard;
