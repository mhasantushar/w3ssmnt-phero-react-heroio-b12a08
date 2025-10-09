import React from "react";
import Navbar from "../compos/Navbar";
import Footbar from "../compos/Footbar";
import { Outlet } from "react-router";

const Rootlayout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <div className="flex-1">
        <Outlet />
      </div>
      
      <Footbar />
    </section>
  );
};

export default Rootlayout;
