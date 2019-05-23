import React, {PureComponent} from 'react';

const withHighlightedItem = ((Component, initialIndex = -1) => {
  class WithHighlightedItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        highlightedItem: initialIndex,
      };
    }

    render() {
      const {highlightedItem} = this.state;

      return (
        <Component
          {...this.props}
          highlightedItem={highlightedItem}
          setHighlightedItem={(index) => {
            this.setState({
              highlightedItem: index,
            });
          }}
        />
      );
    }
  }

  return WithHighlightedItem;
});

export default withHighlightedItem;
