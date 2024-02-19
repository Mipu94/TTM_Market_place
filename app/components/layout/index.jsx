import React from "react";
import Header from "../header/index.tsx";
import Footer from "../footer";
import PageTitle from "../page-title";
import { useRouter } from "next/router";

export default function MainLayout({ children }) {
  const { pathname } = useRouter();
  return (
    <>
      <Header />
      {pathname !== "/" && <PageTitle />}
      {children}
      <Footer />
    </>
  );
}
