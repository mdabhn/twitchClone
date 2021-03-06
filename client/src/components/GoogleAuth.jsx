import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sign_in, sign_out } from '../actions';
class GoogleAuth extends Component {
  // state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          client_id:
            '611388204026-2cdk97f8kfevntrt639tjc04ghghkqk5.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthchange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
  }

  onAuthchange = (isSignedIn) => {
    if (isSignedIn) this.props.sign_in(this.auth.currentUser.get().getId());
    else this.props.sign_out();
  };

  renderButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }

    if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => {
            this.auth.signOut();
          }}
          className='ui red google button'
        >
          <i className='google icon'></i>
          Sign out
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          this.auth.signIn();
        }}
        className='ui red google button'
      >
        <i className='google icon'></i>
        Sign In
      </button>
    );
  }

  render() {
    return <div>{this.renderButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { sign_in, sign_out })(GoogleAuth);
