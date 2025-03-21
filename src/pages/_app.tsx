import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Gleam App | Professional Cleaning Services | Transform Your Space</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
