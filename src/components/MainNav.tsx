import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const MainNav = () => {
  return (
    <span className="flex space-x-2 items-center">
      <Link to="/order-status" className="font-bold hover:text-orange-500">
        Order Status
      </Link>

      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button>
    </span>
  );
};

export default MainNav;
