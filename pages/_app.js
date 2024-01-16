import Head from "next/head";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import users from "../reducers/users";

function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: { users },
  });

  return (
    <>
      <Provider store={store}>
        <Head>
          <title> Nettoyage a domicile 2024</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;