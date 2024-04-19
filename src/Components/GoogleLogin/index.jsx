import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from 'react-facebook-login';

function GoogleLoginComp() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <h2>Google Login / Facebook Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      <FacebookLogin
        appId="YOUR_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
      />
    </div>
  );
}
export default GoogleLoginComp;
