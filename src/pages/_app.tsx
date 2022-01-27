import "styles/app.scss";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import { ProvideAuth } from "hooks/use-auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProvideAuth>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideAuth>
  );
}

export default MyApp;
