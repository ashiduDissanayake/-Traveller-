import { createRoot } from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/ContextProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
  <ContextProvider>
    <App />
  </ContextProvider>
  </GoogleOAuthProvider>
);
