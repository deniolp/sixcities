import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/user/user';
import {getAuthError} from '../../reducer/user/selectors';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleEmailInput = this._handleEmailInput.bind(this);
    this._handlePasswordInput = this._handlePasswordInput.bind(this);
  }

  render() {
    return <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={this._handleEmailInput}/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={this._handlePasswordInput}/>
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {email = ``, password = ``} = this.state.formData;

    this.props.submitForm(email, password);
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

SignIn.propTypes = {
  submitForm: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authError: getAuthError(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (email, password) => dispatch(Operation.authorizeUser(email, password)),
});

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
