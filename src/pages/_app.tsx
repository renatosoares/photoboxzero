import "styles/app.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "layouts/Layout";
import { useEffect, useState } from "react";
import { ProvideReportHeader as ProvideReportHeaderContext } from "contexts/ReportHeaderContext";

function App({ Component, pageProps }: AppProps) {
  const [contextReportHeaderTitle, setContextReportHeaderTitle] = useState<
    string | null
  >(null);

  const [contextReportHeaderActions, setContextReportHeaderActions] = useState(
    []
  );

  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap.bundle.js");
    }
  }, []);

  useEffect(() => {
    setContextReportHeaderTitle(pageProps.contextReportHeader?.title);
    setContextReportHeaderActions(pageProps.contextReportHeader?.actions);
  }, [pageProps.contextReportHeader]);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ProvideReportHeaderContext
        title={contextReportHeaderTitle}
        actions={contextReportHeaderActions}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideReportHeaderContext>
    </SessionProvider>
  );
}

export default App;
