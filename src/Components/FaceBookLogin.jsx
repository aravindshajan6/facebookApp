// FacebookLoginButton.js
import React, { useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ onLoginSuccess, onLoginFailure }) => {

  const responseFacebook = (response) => {
    if (response.accessToken) {
      // User has successfully authenticated
      onLoginSuccess(response);
    } else {
      // Authentication failed
      onLoginFailure(response);
    }
  };

  return (
    <FacebookLogin
      appId="1165768271063440"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};

export default FacebookLoginButton;


