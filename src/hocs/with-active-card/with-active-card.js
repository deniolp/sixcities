import React, {PureComponent} from 'react';

const withActiveCard = ((Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={(item) => {
            this.setState({
              activeCard: item,
            });
          }}
          onMouseLeave={() => {
            this.setState({
              activeCard: null,
            });
          }}
        />
      );
    }
  }

  return WithActiveCard;
});

export default withActiveCard;
