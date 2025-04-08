import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  //This hook will give us access to the logged in user, and once we have the logged in user, we can make the call to create a new user

  const { user } = useAuth0(); // ==> This gives us access to current logged in user
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();

  //once this component loads, we want to create the user and navigate away from here
  const hasCreatedUser = useRef(false);
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading....</>;
};

export default AuthCallbackPage;

//UseRef here ensures that the this entire instance runs only once. UseRef hook stores a state value and whenever the states value changes it doesn't triggger the component to re-render
