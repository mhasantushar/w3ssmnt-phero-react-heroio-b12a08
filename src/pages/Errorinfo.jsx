import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../compos/Navbar";
import Footbar from "../compos/Footbar";

const Errorinfo = () => {
  const error = useRouteError();

  return (
    <section className="flex flex-col min-h-screen error-page">
      <header>
        <Navbar />
      </header>

      <div className="flex-1">
        <p>
          <i>{error?.statusText || error?.message || "Unknown error"}</i>
        </p>
        {error?.status === 404 ? (
          <p>The page you're looking for doesn't exist.</p>
        ) : (
          <p>An unexpected error occurred.</p>
        )}
        <a href="/">Go back to homepage</a>
      </div>

      <Footbar />
    </section>
  );
};

export default Errorinfo;
