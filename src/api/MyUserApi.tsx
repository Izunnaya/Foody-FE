const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//define the type of the variables to be used in the actual request function
type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

// The hook to make the actual request to the back end
export const useCreateMyUser = async (user: CreateUserRequest) => {
  const response = await fetch(`${API_BASE_URL}/api/my/user`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("failed to create user");
  }
};

// Strepp
