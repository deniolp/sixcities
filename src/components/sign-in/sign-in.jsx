import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/user/user';
import {getAuthError} from '../../reducer/user/selectors';
import withForm from '../../hocs/with-form/with-form';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    const {authError, onChangeEmailInput, onChangePasswordInput} = this.props;

    return <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" onChange={onChangeEmailInput}/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" onChange={onChangePasswordInput}/>
            </div>
            {this._getErrorElement(authError)}
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
    const {email = ``, password = ``} = this.props.formData;

    this.props.submitForm(email, password);
  }

  _getErrorElement(authError) {
    return authError ? <span className="login__error" style={{
      display: `block`,
    }}>{authError}</span> : ``;
  }
}

SignIn.propTypes = {
  submitForm: PropTypes.func.isRequired,
  authError: PropTypes.string,
  onChangePasswordInput: PropTypes.func,
  onChangeEmailInput: PropTypes.func,
  formData: PropTypes.objectOf(PropTypes.string),
};

const mapStateToProps = (state) => ({
  authError: getAuthError(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (email, password) => dispatch(Operation.authorizeUser(email, password)),
});

export {SignIn};

export default withForm(connect(mapStateToProps, mapDispatchToProps)(SignIn));
