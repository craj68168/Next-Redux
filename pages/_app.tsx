import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper, persistor } from "../store";
import { useEffect, useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
