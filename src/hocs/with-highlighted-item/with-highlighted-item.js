import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withHighlightedItem = ((Component) => {
  class WithHighlightedItem extends PureComponent {
    constructor(props) {
      super(props);
      const {active} = this.props;

      this.state = {
        highlightedItem: active || null,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          active={this.state.highlightedItem}
          setHighlightedItem={(active) => {
            this.setState({
              highlightedItem: active,
            });
          }}
        />
      );
    }
  }

  WithHighlightedItem.propTypes = {
    active: PropTypes.string,
  };

  return WithHighlightedItem;
});

export default withHighlightedItem;
