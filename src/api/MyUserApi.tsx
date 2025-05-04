import { useAuth0 } from "@auth0/auth0-react";

import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//define the type of the variables to be used in the actual request function
type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

// This is the custom hook to make the actual request to the backend to create a user
export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("user not created");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isSuccess,
    isError,
  };
};

//NOTES

// The *getAccessTokenSilently* is a function that let's us fetch the users token from the Auth0 server using the Auth0 hook. Behind the scenes the function handles everytihing concerning refresh token, expiration and other things.

// Steps to do do this,
// Destructure the getAccessTokenSilently function from Auth0
// Make the call to the Auth0 server by creating a variable "accesToken" inside the "CreateMyUserRequest" request
// Once that's done, then append the accessToken to the Header of the request to create a user

// Note that it's a covention that when when using OAuth, that you pass accessToken under an authorization header that's prefixed with the word "Bearer"
