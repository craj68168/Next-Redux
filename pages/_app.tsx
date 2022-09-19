import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return <> 
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}><Component {...pageProps} /> </PersistGate>
    </Provider>
  </> ;
}
export default MyApp
