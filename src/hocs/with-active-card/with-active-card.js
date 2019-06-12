import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveCard = ((Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };

      this._onCardClickHandler = this._onCardClickHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.city !== prevProps.city) {
        this.setState({
          activeCard: null,
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
    city: PropTypes.object,
  };

  return WithActiveCard;
});

export default withActiveCard;
