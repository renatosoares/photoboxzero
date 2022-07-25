// components/layout.js

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import { useRouter } from "next/router";
import NavMenu from "components/NavMenu";
import ReportHeader from "components/ReportHeader";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  switch (router.pathname) {
    case "/login":
      return <main>{children}</main>;

    default:
      return (
        <>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <NavMenu />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <ReportHeader />
                <h2>Section title</h2>
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </>
      );
  }
}
