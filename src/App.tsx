import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import { useAuth } from "./components/AuthProvider";

const App = () => {
  const { token } = useAuth();
  return (
    <>
      <div>
        {token && (
          <div>
            <Navbar />
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default App;
