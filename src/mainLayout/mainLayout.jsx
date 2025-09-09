import React from "react";
import Footer from "../components/shared/footer/footer";
import { Outlet } from "react-router-dom";
import HeaderMenu from "../components/shared/header/headerMenu";

export default function MainLayout() {
  return (
    <>
  {/* <HeaderMain /> */}
      <HeaderMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}