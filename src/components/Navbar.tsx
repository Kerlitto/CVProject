import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./DarkTheme/ModeToggle";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-8 px-8 py-4">
        <Link to="/">Home</Link>
        <div className="flex-end flex flex-row items-center gap-8">
          <Link to="/about">About Me</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/favorites">Favorites</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link to="/">Account</Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
