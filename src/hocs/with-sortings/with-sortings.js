import React, {PureComponent} from 'react';

const withSortings = (Component) => {
  class WithSortings extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        opened: false,
      };

      this._onFormClickHandler = this._onFormClickHandler.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onSortingsClickHandler={this._onFormClickHandler}
          opened={this.state.opened}
        />
      );
    }

    _onFormClickHandler() {
      this.setState({
        opened: !this.state.opened,
      });
    }
  }
  return WithSortings;
};

export default withSortings;
