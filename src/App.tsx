import { Auth0Provider } from "@auth0/auth0-react";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Auth0Provider
      domain="dev-l5hwd0qjgbmuyqt1.us.auth0.com"
      clientId="sdoGUVfM14bzZoNEaQHzwPXhQaf6mCFP"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <HomePage />
    </Auth0Provider>
  );
}

export default App;
