import React, {PureComponent} from 'react';

const withHighlitedItem = ((Component, initialIndex = -1) => {
  class WithHighlitedItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        highlitedItem: initialIndex,
      };
    }

    render() {
      const {highlitedItem} = this.state;

      return (
        <Component
          {...this.props}
          highlitedItem={highlitedItem}
          setHighlitedItem={(index) => {
            this.setState({
              highlitedItem: index,
            });
          }}
        />
      );
    }
  }

  return WithHighlitedItem;
});

export default withHighlitedItem;
