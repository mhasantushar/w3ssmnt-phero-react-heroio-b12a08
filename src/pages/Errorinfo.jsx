import React from "react";
import { useRouteError } from "react-router";

const Errorinfo = () => {
  const error = useRouteError();

  return (
    <section className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <div className="flex-1">
        <div className="text-red-800">{error.message}</div>;
      </div>
      
      <Footbar />
    </section>
  );
};

export default Errorinfo;
