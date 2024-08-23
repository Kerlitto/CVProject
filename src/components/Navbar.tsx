import { Link } from "react-router-dom";
import api from "@/api";
import { useAuth } from "@/components/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./DarkTheme/ModeToggle";

const Navbar = () => {
  const { setToken } = useAuth();

  const handleSignOut = async () => {
    try {
      await api.post("/api/signout");

      setToken?.(null);
    } catch {
      setToken?.(null);
    }
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-8 px-8 py-4">
        <Link to="/">Home</Link>
        <div className="flex-end flex flex-row items-center gap-8">
          <Link to="/">About Me</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/favorites">Favorites</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link to="/">Account</Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
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
