import React, {PureComponent} from 'react';

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        formData: {},
      };

      this._handleEmailInput = this._handleEmailInput.bind(this);
      this._handlePasswordInput = this._handlePasswordInput.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        formData={this.state.formData}
        onChangeEmailInput={this._handleEmailInput}
        onChangePasswordInput={this._handlePasswordInput}
      />;
    }

    _handleEmailInput(evt) {
      this.setState({
        formData: Object.assign({}, this.state.formData, {email: evt.target.value}),
      });
    }

    _handlePasswordInput(evt) {
      this.setState({
        formData: Object.assign({}, this.state.formData, {password: evt.target.value}),
      });
    }
  }

  return WithForm;
};

export default withForm;
