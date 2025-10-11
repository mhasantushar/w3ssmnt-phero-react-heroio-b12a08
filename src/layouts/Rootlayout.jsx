import React from "react";
import Navbar from "../compos/Navbar";
import Footbar from "../compos/Footbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <section className="flex flex-col min-h-dvh">
      <header>
        <Navbar />
      </header>

      <div className="flex-1">
        <Outlet />
      </div>
      
      <Footbar />
      <ToastContainer />
    </section>
  );
};

export default RootLayout;
