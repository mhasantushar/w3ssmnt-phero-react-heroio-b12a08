import React from "react";
import icoGPlay from "../assets/ico-gplay.png";
import icoAStore from "../assets/ico-astore.png";
import imgHero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="mx-auto pt-20 w-11/12 text-center">
      <h1 className="font-bold text-gray-600 text-7xl">
        We Build
        <br />
        <span className="text-indigo-600">Productive</span> Apps
      </h1>
      <p className="my-8">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex justify-center items-center gap-4">
        <a href="https://play.google.com/store/games" target="_blank">
          <button className="p-6 btn">
            <img src={icoGPlay} /> Google Play
          </button>
        </a>
        <a href="https://apps.apple.com/us/app/apple-store/" target="_blank">
          <button className="p-6 btn">
            <img src={icoAStore} />
            App Store
          </button>
        </a>
      </div>

      <figure className="mt-12">
        <img className="flex mx-auto" src={imgHero} alt="Hero Image" />
      </figure>
    </section>
  );
};

export default Hero;
