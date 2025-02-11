import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
const MobileNavLinks = () => {
  const { logout, isAuthenticated } = useAuth0();
  const styledLink =
    "flex bg-white items-center font-bold hover:text-orange-500";
  return (
    <>
      <Link to="/order-status" className={styledLink}>
        Order Status
      </Link>
      <Link to="/manage-restaurant" className={styledLink}>
        My Restaurant
      </Link>
      <Link to="/user-profile" className={styledLink}>
        User Profile
      </Link>

      {isAuthenticated && (
        <Button
          onClick={() => logout()}
          className="flex items-center px-3 font-bold hover:bg-gray-500"
        >
          Log Out
        </Button>
      )}
    </>
  );
};

export default MobileNavLinks;
