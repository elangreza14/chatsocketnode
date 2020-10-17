import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../contexts";
import { ProtectRoute } from "../utils/ProtectRoute";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
