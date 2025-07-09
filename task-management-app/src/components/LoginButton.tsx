// src/components/LoginButton.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // Don't show login button if already authenticated
  if (isAuthenticated) return null;

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/dashboard", //  Redirect to dashboard after login
      },
    });
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;

