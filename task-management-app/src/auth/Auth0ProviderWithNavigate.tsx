import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

// Props type for the provider component
type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();

  // Replace with your actual Auth0 settings
  const domain = "dev-zs51bnekwfkbygvl.us.auth0.com";
  const clientId = "CbvFgRuNetsMfDirqGTsGlma8pG7liBq";
  const redirectUri = "http://localhost:5182/callback";

  // After login, redirect user to the original location or fallback to /dashboard
  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    navigate(appState?.returnTo || "/dashboard");
  };

  // If required values are missing, don't render anything
  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
