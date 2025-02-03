import React from "react";
import { Auth0Provider, AppState, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const AuthProviderWithNavigate = ({ children }: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize Auth");
  }
  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("User logged in", user);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithNavigate;

// This is the where we will create the code that uses the SDK to connect to our Auth0 acct we created.

// ****KEY THINGS TO KNOW HERE

//The "appState"  parameter passed into onRedirectCallback is what will hold information about the url path where the user was before they tried using Auth0. If a route where they are meant to go is not specified, the user is authomatically rerouted to the page where they were before the login/sign Up happened

//Example: If the user tried to access /cart before logging in, appState remembers /cart to send them back there.

// user (optional): This parameter is optional, but it contains the authenticated user’s data (email, name, etc.).
// We need the users info as we will be using some part of it to display to the frontend and also the information to store in the backend
