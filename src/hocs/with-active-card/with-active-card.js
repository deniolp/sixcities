import React, {PureComponent} from 'react';

const withActiveCard = ((Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
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
        activeCard: null,
      });
    }
  }

  return WithActiveCard;
});

export default withActiveCard;
