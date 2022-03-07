import "styles/app.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "layouts/Layout";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap.bundle.js");
    }
  }, []);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default App;
