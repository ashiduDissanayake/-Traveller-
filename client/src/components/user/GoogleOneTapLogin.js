import React from "react";
import { useValue } from "../../context/ContextProvider";
import { jwtDecode } from "jwt-decode";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const GoogleOneTapLogin = () => {
  const { dispatch } = useValue();

  useGoogleOneTapLogin({
    onSuccess: tokenResponse => handleResponse(tokenResponse),
  });

  const handleResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);
    const { sub: id, email, name, picture: photoURL } = decodedToken;
    dispatch({
      type: "UPDATE_USER",
      payload: { id, email, name, photoURL, token, google: true },
    });
    dispatch({ type: "CLOSE_LOGIN" });
  };
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleOneTapLogin;
