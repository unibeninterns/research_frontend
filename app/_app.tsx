// pages/_app.tsx
import dotenv from "dotenv";
import type { AppProps } from "next/app";
import "./globals.css";

dotenv.config();

function MyApp({ Component, pageProps }: AppProps) {
  // Use custom layout if the page has one
  const getLayout = (page: React.ReactNode) => page;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
