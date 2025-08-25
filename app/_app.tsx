// pages/_app.tsx
import './globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // Use custom layout if the page has one
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
