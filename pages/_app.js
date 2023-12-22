
import Head from 'next/head';
import Header from '../components/Header';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import users from '../reducers/users'


function App({ Component, pageProps }) {
  const store = configureStore({
    reducer: {users}
   });
  
  
   return (
    <>
    <Provider store={store}>
      <Head>
        <title> CleanSweetHome </title>
      </Head>
      <Header />
      <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
