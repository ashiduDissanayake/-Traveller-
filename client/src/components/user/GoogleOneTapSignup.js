import React from "react";
import { useValue } from "../../context/ContextProvider";
import { jwtDecode } from "jwt-decode";
import {useGoogleOneTapLogin} from '@react-oauth/google';

const GoogleOneTapSignup = () => {
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
    dispatch({ type: "CLOSE_SIGNIN" });
  };
  return (
    <div>
    </div>
  );
};

export default GoogleOneTapSignup;
