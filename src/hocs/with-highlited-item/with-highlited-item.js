import React, {PureComponent} from 'react';

const withHighlitedItem = ((Component) => {
  class WithHighlitedItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        highlitedItem: -1,
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
