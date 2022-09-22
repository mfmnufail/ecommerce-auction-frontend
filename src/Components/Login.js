import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const Login = () => {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  return (
    <div>
      <Button primary onClick={loginWithPopup}> Login with popup </Button>
      <Button primary onClick={loginWithRedirect}> Login with redirect </Button>
      <Button primary onClick={logout}> Logout </Button>
      <h3>
      User is {isAuthenticated ? "Logged in" : "Not logged in"}
      </h3>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </div>
  );
};

export default Login;
