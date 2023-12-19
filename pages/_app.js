
import Head from 'next/head';
import Header from '../components/Header';



function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>je suis la</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
