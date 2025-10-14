import React, { useEffect, useState } from "react";
import Navbar from "../compos/Navbar";
import Footbar from "../compos/Footbar";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import Spinner from "../compos/Spinner";

const RootLayout = () => {
  const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Triggers on route change

  return (
    <section className="flex flex-col min-h-dvh">
      <header>
        <Navbar />
      </header>

      <div className="relative flex-1">
        {showSpinner && (
          <div className="z-50 absolute inset-0 flex justify-center items-center bg-white bg-opacity-75">
            <Spinner />
          </div>
        )}
        <Outlet />
      </div>

      <Footbar />
      <ToastContainer />
    </section>
  );
};

export default RootLayout;