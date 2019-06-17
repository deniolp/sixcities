import React, {PureComponent} from 'react';

const withValidated = (Component) => {
  class WithValidated extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isRadioPressed: false,
        isValidated: false,
      };

      this._onChangeTextareaHandler = this._onChangeTextareaHandler.bind(this);
      this._onClickRadioHandler = this._onClickRadioHandler.bind(this);
    }
    render() {
      return (
        <Component
          {...this.props}
          onChangeTextareaHandler={this._onChangeTextareaHandler}
          onClickRadioHandler={this._onClickRadioHandler}
          isValidated={this.state.isValidated}
        />
      );
    }

    _onClickRadioHandler() {
      this.setState({
        isRadioPressed: true,
      });
    }

    _onChangeTextareaHandler(evt) {
      evt.preventDefault();

      if (evt.target.value.length >= 50 && evt.target.value.length <= 300) {
        if (this.state.isRadioPressed) {
          this.setState({
            isValidated: true,
          });
        }
      } else {
        this.setState({
          isValidated: false,
        });
      }
    }
  }
  return WithValidated;
};

export default withValidated;
