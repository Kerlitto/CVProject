import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/components/AuthProvider";
import SignInForm from "@/components/SignInForm";
import { ModeToggle } from "@/components/DarkTheme/ModeToggle";

const SignInPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return (
    <>
      <div className="absolute right-5 top-5">
        <ModeToggle />
      </div>
      <div className="container flex h-screen items-center justify-center py-4">
        <SignInForm />
      </div>
    </>
  );
};

export default SignInPage;
