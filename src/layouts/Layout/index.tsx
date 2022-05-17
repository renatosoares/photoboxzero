// components/layout.js

import Header from "layouts/Header";
import Footer from "layouts/Footer";
import { useRouter } from "next/router";

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
          <main>{children}</main>
          <Footer />
        </>
      );
  }
}
