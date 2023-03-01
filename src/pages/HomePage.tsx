import { useAuth0 } from "@auth0/auth0-react";

function HomePage() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  const logoutUser = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  console.log(isAuthenticated, user);
  return (
    <div>
      {isLoading ? <h3>Loading...</h3> : null}
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
}

export default HomePage;
